import React, {useState} from "react";
import {useDispatch} from "react-redux";
/*
import {updateLikesCount} from "../tuits/tuits-reducer";
*/
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({post={
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
                   }}) => {
    /*const [liked, setLiked] = useState(false);
    const [likesCount, setLikeCount] = useState(tuit.likes);*/
    const [tuit, setNewTuit] = useState(post);
    const dispatch = useDispatch();

    /*const handleLike = () => {
        if (liked) {
            setLikeCount(likesCount - 1);
        }else{
            setLikeCount(likesCount + 1);
        }
        setLiked(!liked);
        dispatch(updateLikesCount(post._id, likesCount))
    }*/
    const updateLikesHandler = () => {
        const newTuit = {
            ...tuit,
            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
            liked: !tuit.liked
        };
        setNewTuit(newTuit);
        dispatch(updateTuitThunk(newTuit));
    }

    const updateDislikesHandler = () => {
        const newTuit = {
            ...tuit,
            dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
            disliked: !tuit.disliked
        };
        setNewTuit(newTuit);
        dispatch(updateTuitThunk(newTuit));
    }
    return (
        <>
            <div className="row pe-3">
                <div className="col-2">
                    <a className="text-decoration-none row" href="#">
                        <i className="col-4 pe-0 bi bi-chat text-muted"></i>
                        <p className="col-5 ps-0 text-muted ms-1">{tuit.replies}</p>
                    </a>
                </div>
                <div className="col-2">
                    <a className="text-decoration-none row" href="#">
                        <i className="col-4 pe-0 bi bi-arrow-repeat text-muted"></i>
                        <p className="col-5 ps-0 text-muted ms-1">{tuit.retuits}</p>
                    </a>
                </div>
                <div className="col-2">
                    <a className="text-decoration-none row" href="#">

                        <i className={`col-4 pe-0 bi bi-heart ${tuit.liked ? 'text-danger' : 'text-muted'}`}
                            onClick={updateLikesHandler}
                        ></i>
                        {/*<i className={`col-4 pe-0 bi bi-heart ${liked ? 'text-danger' : 'text-muted'}`}
                            onClick={()=>dispatch(updateTuitThunk({
                                ...tuit,
                                likesCount: tuit.likesCount + 1
                            }))}
                        ></i>*/}

                        <p className="col-5 ps-0 text-muted ms-1">{tuit.likes}</p>
                    </a>
                </div>
                <div className="col-2">
                    <a className="text-decoration-none row" href="#">
                        <i className={`col-4 pe-0 bi bi-heartbreak ${tuit.disliked ? 'text-primary' : 'text-muted'}`}
                           onClick={updateDislikesHandler}
                        ></i>
                        <p className="col-5 ps-0 text-muted ms-1">{tuit.dislikes}</p>
                    </a>
                </div>
                <div className="col-2">
                    <a className="text-decoration-none row" href="#">
                        <i className="col-4 pe-0 bi bi-upload text-muted"></i>
                    </a>
                </div>
            </div>
        </>
    )
};

export default TuitStats;