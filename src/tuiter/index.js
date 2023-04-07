import React from "react";
import {Link} from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import PostSummaryList from "./post-summary-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
/*import HomeComponent from "./home";*/
import {Provider} from "react-redux";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import {configureStore} from "@reduxjs/toolkit";
import HomeComponent from "./home"
import ProfileComponent from "./profile";
import EditProfileComponent from "./profile/editProfile";
import profileReducer from "./reducers/profileReducer";
/*import ProfileComponent from "./profile";
import EditProfileComponent from "./profile/editProfile";*/

const store = configureStore(
    {reducer: {who: whoReducer, tuitsData:tuitsReducer, profile: profileReducer }}
)

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-2 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position" : "relative"}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
{/*
                        <Route path="home"    element={<HomeComponent/>}/>
*/}
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                    {/*<HomeComponent/>*/}
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};
export default Tuiter;