import React from "react";
import EditProfileComponent from "./editProfile";


const ProfileInfo = (people) => {
    return(
        <>
            <div className="row">
                <div className="col-2">
                    <a href="#">Back</a>
                </div>
                <div className="col-10">
                    <p className="fw-bold">
                        {people.firstName} {people.lastName}
                    </p>
                    <p className="text-muted small">6,114 Tweets</p>
                </div>
            </div>
            <div className="pos-relative">
                <img
                    className="backgroundPic position-relative"
                    src="https://th.bing.com/th/id/OIP.tNB4QTvceXLuI5ayAGuCUwHaEo?w=311&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                />
                <img
                    className="profilePicture  position-absolute rounded-circle"
                    src={people.profilePicture}
                />
            </div>
            <div>
                <button
                    onClick={<EditProfileComponent profile={}/>}
                    className="rounded-5 btn-white mt-1 border-secondary btn float-end"
                >
                    Edit Profile
                </button>
            </div>
            <p className="fw-bold">
                {people.firstName} {people.lastName}
            </p>
            <p className="text-muted">{people.handle}</p>
            {people.bio}
            <div className="row">
                <div className="col-sm">{people.location}</div>
                <div className="col-sm">{people.dateOfBirth}</div>
                <div className="col-sm">{people.dateJoined}</div>
            </div>
            <div className="row">
                <div className="col-sm">{people.followingCount} Following</div>
                <div className="col-sm">{people.followersCount} Followers</div>
            </div>
        </>
    )
}

export default ProfileInfo;