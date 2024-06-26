import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Plans from "../components/Plans";
import SavedPlans from "../components/SavedPlans";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../assets/styles/UserPage.css';
import { apiUrl } from '../config';


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
    const [selectedTab, setSelectedTab] = useState('myPlans'); // State for selected tab
	
	const [isEditingBio, setIsEditingBio] = useState(false);
	const [newBio, setNewBio] = useState("");


	const handleEditBio = () => {
	  setIsEditingBio(true);
	  setNewBio(user.bio);
	};

	const handleChangeBio = (e) => {
	  setNewBio(e.target.value);
	};

	const handleCancelEditBio = () => {
	  setIsEditingBio(false);
	};

	const handleSaveBio = async () => {
		try {
			const response = await fetch(`${apiUrl}/user/updateBio?userId=${id}`, {
			  method: 'PUT',
			  body: JSON.stringify({ bio: newBio }),
			  headers: {
				'Content-Type': 'application/json'
			  },
			  credentials: 'include'
			});

			if (!response.ok) {
			  throw new Error(`HTTP error! status: ${response.status}`);
			}
			const result = await response.json();
			setUser(prevUser => ({ ...prevUser, bio: newBio }));
			setIsEditingBio(false);
		  } catch (error) {
			console.log(error.message);
		  }
		};


    const handleFollow = async () => {
        try {
            const method = isFollowing ? 'DELETE' : 'POST';
            const response = await fetch(`${apiUrl}/user/followUser?userId=${id}`, {
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
                const response = await fetch(`${apiUrl}/user/getUserData?userId=${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const userData = await response.json();
                setUser(userData);


                const response2 = await fetch(`${apiUrl}/user/getUserIdAuth`, {
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

                    const response3 = await fetch(`${apiUrl}/user/isFollowing?userId=${id}`, {
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
                    <div className="col-lg-8 user-bio-div">
						{isEditingBio && (
						  <div className="user-bio-div-editing">
							<textarea
							  className="edit-bio-input"
							  value={newBio}
							  onChange={handleChangeBio}
							/>
                            <div>
							<button className="btn-when-edit" onClick={handleSaveBio}>Save</button>
							<button className="btn-when-edit" onClick={handleCancelEditBio}>Cancel</button>
                            </div>
						  </div>
						)}
						
						{!isEditingBio && (
						  <p className="user-bio col-lg-10">
							{!user.bio && "No user bio"}
							{user.bio && user.bio}
						  </p>
						)}
						{ownPage && !isEditingBio && (
						  <button className="edit-bio-btn" onClick={handleEditBio}>
							Edit Bio
						  </button>
						)}
                    </div>
                </div>
                {ownPage && <div className="tab-container">
                    <button 
                        className={`tab-button ${selectedTab === 'myPlans' ? 'active' : ''}`} 
                        onClick={() => setSelectedTab('myPlans')}
                    >
                        My Plans
                    </button>
                    <button 
                        className={`tab-button ${selectedTab === 'savedPlans' ? 'active' : ''}`} 
                        onClick={() => setSelectedTab('savedPlans')}
                    >
                        Saved Plans
                    </button>
                </div>}
                <div className="plan-post-containter">
                    {selectedTab === 'myPlans' && <Plans id={id} factor="user" />}
                    {selectedTab === 'savedPlans' && <SavedPlans id={id} />}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserPage;