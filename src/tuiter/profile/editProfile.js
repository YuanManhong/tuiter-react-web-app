import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profileReducer";
import {useNavigate} from "react-router";




const EditProfileComponent = () => {
    const {user} = useSelector((state) => state.profile);
    const [profile, setProfile] = useState(user);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSave = ()=>{
        dispatch(updateProfile(profile));
        navigate('/tuiter/profile');
    }

    return (
        <div className="container">
            <div className="list-group">
                <div className="list-group-item">
                    <h2>Edit Profile</h2>
                </div>
                <div className="list-group-item p-0 pos-relative">
                    <form onSubmit={handleSave} className="ms-2 me-2">
                        <label className="w-25 mb-2">First Name</label>
                        <input type="text"  className="form-text w-75  mb-2" placeholder={user.firstName} onChange={(e) =>
                            setProfile({
                                ...profile,
                                firstName: e.target.value
                            })
                        }/>
                        <label className="w-25 mb-2">Last Name</label>
                        <input type="text" className="form-text w-75  mb-2" placeholder={user.lastName} onChange={(e) =>
                            setProfile({
                                ...profile,
                                lastName: e.target.value
                            })

                        }/>
                        <label  className="w-25 mb-2">Bio</label>
                        <textarea className="form-text w-75" placeholder={user.bio} onChange={(e) => setProfile({
                            ...profile,
                            bio: e.target.value
                        })} />

                        <label  className="w-25 mb-2">Location</label>
                        <input type="text" className="form-text w-75" placeholder={user.location} onChange={(e) => setProfile({
                            ...profile,
                            location: e.target.value
                        })} />

                        <label  className="w-25 mb-2">Website</label>
                        <input type="text" className="form-text w-75" placeholder={user.website} onChange={(e) => setProfile({
                            ...profile,
                            website: e.target.value
                        })} />

                        <label  className="w-25 mb-2">Date of Birth</label>
                        <input type="date" className="form-text w-75" placeholder={user.dateOfBirth} onChange={(e) => setProfile({
                            ...profile,
                            dateOfBirth: e.target.value
                        })} />
                        <button className="btn btn-primary mb-3 float-end" type="submit" onClick={handleSave}>Save</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default EditProfileComponent;