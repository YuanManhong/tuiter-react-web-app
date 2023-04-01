import React from "react";
import TuitStats from "./tuitStats";
import {useDispatch} from "react-redux";
/*import {deleteTuit} from "../tuits/tuits-reducer";*/
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitsItem = (post = {
        "_id": 123,
        "topic": "Tesla",
        "userName": "Tesla",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "time": "2h",
        "image": "tesla.jpeg",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@Tesla",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
        "disliked": false,
        "dislikes":123
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <div className="container border-top pb-3 pt-3 border-start border-end">
            <div className="row">
                <div className="col-2">
                    <img className="img-fluid float-start rounded-circle" src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-11">
                            <div className="fw-bold">
                                {post.userName} <small> </small>
                                <i className="bi bi-check-circle-fill text-primary"></i>
                                <small className="text-muted fw-normal"> {post.handle} · {post.time}</small>
                            </div>
                        </div>
                        <div className="col-1">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(post._id)}></i>
                        </div>
                    </div>
                    <div>
                        <p>{post.tuit}</p>
                    </div>
                    <TuitStats key={post._id} post={post}/>
                </div>
            </div>
        </div>

    );
};
export default TuitsItem;