import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateLikesCount} from "../tuits/tuits-reducer";

const TuitStats = ({post}) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikeCount] = useState(post.likes);
    const dispatch = useDispatch();

    const handleLike = () => {
        if (liked) {
            setLikeCount(likesCount - 1);
        }else{
            setLikeCount(likesCount + 1);
        }
        setLiked(!liked);
        dispatch(updateLikesCount(post._id, likesCount))
    }
    return (
        <>
            <div className="row pe-3">
                <div className="col-3">
                    <a className="text-decoration-none row" href="#">
                        <i className="col-4 pe-0 bi bi-chat text-muted"></i>
                        <p className="col-5 ps-0 text-muted ms-1">{post.replies}</p>
                    </a>
                </div>
                <div className="col-3">
                    <a className="text-decoration-none row" href="#">
                        <i className="col-4 pe-0 bi bi-arrow-repeat text-muted"></i>
                        <p className="col-5 ps-0 text-muted ms-1">{post.retuits}</p>
                    </a>
                </div>
                <div className="col-3">
                    <a className="text-decoration-none row" href="#">

                        <i className={`col-4 pe-0 bi bi-heart ${liked ? 'text-danger' : 'text-muted'}`}
                            onClick={handleLike}
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