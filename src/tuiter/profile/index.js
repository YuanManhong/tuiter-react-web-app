import "./profile.css";
import { useSelector } from "react-redux";
import React from "react";
import ProfileInfo from "./profileInfo"

const ProfileComponent = () => {
    const info = useSelector((state) => state.profiles);

    return (
        <>
            {
                info.map((people) =>
                    <ProfileInfo
                        key={people._id}
                        people={people}/>
                )
            }

        </>
    );
};

export default ProfileComponent;
