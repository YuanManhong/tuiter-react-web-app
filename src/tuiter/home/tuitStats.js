import React, {useState} from "react";
import {useDispatch} from "react-redux";
/*
import {updateLikesCount} from "../tuits/tuits-reducer";
*/
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikeCount] = useState(tuit.likes);
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
    return (
        <>
            <div className="row pe-3">
                <div className="col-3">
                    <a className="text-decoration-none row" href="#">
                        <i className="col-4 pe-0 bi bi-chat text-muted"></i>
                        <p className="col-5 ps-0 text-muted ms-1">{tuit.replies}</p>
                    </a>
                </div>
                <div className="col-3">
                    <a className="text-decoration-none row" href="#">
                        <i className="col-4 pe-0 bi bi-arrow-repeat text-muted"></i>
                        <p className="col-5 ps-0 text-muted ms-1">{tuit.retuits}</p>
                    </a>
                </div>
                <div className="col-3">
                    <a className="text-decoration-none row" href="#">

                        {/*<i className={`col-4 pe-0 bi bi-heart ${liked ? 'text-danger' : 'text-muted'}`}
                            onClick={handleLike}
                        ></i>*/}
                        <i className={`col-4 pe-0 bi bi-heart ${liked ? 'text-danger' : 'text-muted'}`}
                            onClick={()=>dispatch(updateTuitThunk({
                                ...tuit,
                                likesCount: tuit.likesCount + 1
                            }))}
                        ></i>

                        <p className="col-5 ps-0 text-muted ms-1">{likesCount}</p>
                    </a>
                </div>
                <div className="col-3">
                    <a className="text-decoration-none row" href="#">
                        <i className="col-4 pe-0 bi bi-upload text-muted"></i>
                    </a>
                </div>
            </div>
        </>
    )
};

export default TuitStats;