import '../assets/styles/Forum.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Forum({ planId }) {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [userId, setUserId] = useState();
    const [comment, setComment] = useState();
    const [comments, setComments] = useState([]);
    const [username, setUsername] = useState("");
    const [updateComments, setUpdateComments] = useState(false);

    async function createComment(commentData) {
        try {
            const response = await fetch(`http://localhost:6500/nacrt/createComment?planId=${planId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(commentData),
                credentials: 'include'
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Something went wrong');
            }

            const serverResponse = await response.json();
            console.log(serverResponse.message);
            return serverResponse.comment;

        } catch (error) {
            console.error('Error:', error);
        }
    }


    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const responseUserId = await fetch(`http://localhost:6500/user/getUserIdAuth`, {
                    method: 'GET',
                    credentials: 'include'
                });
                if (!responseUserId.ok) {
                    throw new Error(`HTTP error! status: ${responseUserId.status}`);
                }
                const userId = await responseUserId.json();
                setUserId(userId);
            } catch (error) {
                console.log(error.message);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:6500/nacrt/getComments?planId=${planId}`, {
                    method: 'GET',
                    credentials: 'include'
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                const comments = await response.json();
        
            
                const commentsWithUsernames = await Promise.all(comments.map(async (comment) => {
                    const userResponse = await fetch(`http://localhost:6500/user/getUserData?userId=${comment.userid}`, {
                        method: 'GET',
                        credentials: 'include'
                    });
                    if (!userResponse.ok) {
                        throw new Error(`HTTP error! status: ${userResponse.status}`);
                    }
                    const userData = await userResponse.json();
                    return { ...comment, username: userData.username };
                }));
        
                setComments(commentsWithUsernames);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchUserId();
        fetchComments();
    }, [comments.length, updateComments]);

    const handleButtonClick = () => {
        setButtonClicked(!buttonClicked);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        if (userId && comment) {
            const commentData = {
                userId: userId,
                content: comment,
                time: new Date().toISOString()
            };
    
            try {
                const newComment = await createComment(commentData);
                setComments(prevComments => [ ...prevComments, newComment ]);
            } catch (error) {
                console.error('Error adding comment:', error);
            }
        }
        setComment("");
        setButtonClicked(false);
    };
    


    const handleLikeClick = async (commentId) => {
        try {
            if (commentId == undefined) {
                console.log("Comment ID je undefined");
            }
            else {
                console.log("CommentId je:" + commentId);
            }
            const response = await fetch(`http://localhost:6500/nacrt/likeComment?commentId=${commentId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, planId }),
                credentials: 'include'
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Something went wrong');
            }
            setUpdateComments(prev => !prev); 

        } catch (error) {
            console.error('Error:', error);
        }
    };

    function formatTimestamp(seconds) {
        const date = new Date(seconds * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
    
        return `${day}.${month}.${year}`;
    }

    

    return (
        <div className="forum-container">
            <h2>
                FORUM načrta z idjem: {planId}
            </h2>

            <button className="button-komentar" onClick={handleButtonClick}>
                {buttonClicked ? <i className="bi bi-x"></i> : <i className="bi bi-plus"></i>}
            </button>

            {buttonClicked && (
                <form className="form-komentar" onSubmit={handleCommentSubmit}>
                    <textarea
                        className="textarea-komentar"
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder="Write your comment here"
                    />
                    <button className="form-button-komentar bi-chat-dots" type="submit"></button>
                </form>
            )}


{comments && comments.map(comment => (
    comment && (
        <div key={comment.id} className="komentar">
            <p><strong><Link to={`/user/${comment.userid}`}>{comment.username}</Link></strong>: {comment.content}</p>
            <p>{formatTimestamp(comment.time?.seconds)}</p>
            <button onClick={() => handleLikeClick(comment.id)}>
                <i className="bi bi-heart"></i> {comment.liked_users.length}
            </button>
        </div>
    )
))}





        </div>
    );
}

export default Forum;
