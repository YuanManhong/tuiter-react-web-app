import React, { useState } from 'react';
import {useDispatch} from "react-redux";




const EditProfile = (profile) => {
    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dob, setDob] = useState(profile.dob);

    const dispatch = useDispatch();
    const handleSave = ()=>{
        dispatch()//todo:not finished
    }

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSave}>
                <label>Name</label>
                <input type="text"  onChange={(e) => setName(e.target.value)} />

                <label>Bio</label>
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} />

                <label>Location</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

                <label>Website</label>
                <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />

                <label>Date of Birth</label>
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

                <button type="submit" onClick={handleSave}>Save</button>
            </form>
        </div>
    );
};

export default EditProfile;
