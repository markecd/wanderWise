import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Plans from "../components/Plans";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../assets/styles/UserPage.css';


function UserPage() {

    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        bio: "",
        userPlansNumber: 0,
        followersNumber: 0,
        followingNumber: 0
    });
    const [ownPage, setOwnPage] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    const handleBio = async () => {
        try{
            console.log("jugu")
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleFollow = async () => {
        try {
            const method = isFollowing ? 'DELETE' : 'POST';
            const response = await fetch(`http://localhost:6500/user/followUser?userId=${id}`, {
                method: method,
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setIsFollowing(!isFollowing);
            
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:6500/user/getUserData?userId=${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const userData = await response.json();
                setUser(userData);


                const response2 = await fetch(`http://localhost:6500/user/getUserIdAuth`, {
                    method: 'GET',
                    credentials: 'include'
                });
                if (!response2.ok) {
                    throw new Error(`HTTP error! status: ${response2.status}`);
                }
                const loggedUserId = await response2.json();
                
                if(loggedUserId == id){
                    setOwnPage(true)
                } else{
                    setOwnPage(false)

                    const response3 = await fetch(`http://localhost:6500/user/isFollowing?userId=${id}`, {
                        method: 'GET',
                        credentials: 'include'
                    });

                    if (!response3.ok) {
                        throw new Error(`HTTP error! status: ${response3.status}`);
                    }

                    const { isFollowing } = await response3.json();
                    setIsFollowing(isFollowing);
                }
                
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchUserData();
    }, [id]);


    return (
        <div className="userPage">
            <Navbar />
            <div className="user-content container-fluid">
                <div className="userData-container row">
                    <div className="col-lg-4 row">
                        <h1 className="user-name col-lg-12">{user.name}</h1>
                        {ownPage && <h2 className="user-username col-lg-12">{user.username}</h2>}
                        {!ownPage && <h2 className="user-username col-lg-6">{user.username}</h2>}
                        {!ownPage && (
                            <button className="follow-user-btn col-lg-6" onClick={handleFollow}>
                                {isFollowing ? 'Unfollow' : 'Follow'}
                            </button>
                        )}
                        <h4 className="user-plans col-lg-2">{user.userPlansNumber + " Plans"}</h4>
                        <h4 className="user-followers col-lg-3">{user.followersNumber + " Followers"}</h4>
                        <h4 className="user-following col-lg-3">{user.followingNumber + " Following"}</h4>
                        <h4 className="col-lg-4"></h4>
                    </div>
                    <div className="col-lg-8 row">
                        <p className="user-bio col-lg-10">
                            {!user.bio && "No user bio"}
                            {user.bio && user.bio}
                        </p>
                        {ownPage && <button className="edit-bio col-lg-2" onClick={handleBio}>Edit user bio</button>}
                    </div>
                </div>
                <div className="plan-post-containter row">
                    <Plans id={id} factor="user" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserPage;