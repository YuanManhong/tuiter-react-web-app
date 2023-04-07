
import React from "react";
/*
import whoArray from "../data/who.json";
*/
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";


const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) =>state.who
    )
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map((who) =>
                        <li className="list-group-item"
                            key={who._id}>
                            {/*<div className="row">
                                <div className="col-2">
                                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
                                </div>
                                <div className="col-8">
                                    <div className="fw-bold">{who.username}</div>
                                    <div>@{who.handle}</div>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                                </div>
                            </div>*/}
                            <WhoToFollowListItem
                                username={who.username}
                                handle={who.handle}
                                avatarIcon={who.avatarIcon}/>
                        </li>

                    /*<WhoToFollowListItem
                        key={who._id}
                        who={who}/>*/
                )
            }
        </ul>
    );
};
export default WhoToFollowList;