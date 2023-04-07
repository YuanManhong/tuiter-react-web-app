import React from "react";
import TuitStats from "./tuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";


const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <div className="container border-top pb-3 pt-3 border-start border-end">
            <div className="row">
                <div className="col-2">
                    <img className="img-fluid float-start rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-11">
                            <div className="fw-bold">
                                {tuit.username} <small> </small>
                                <i className="bi bi-check-circle-fill text-primary"></i>
                                <small className="text-muted fw-normal"> {tuit.handle} · {tuit.time}</small>
                            </div>
                        </div>
                        <div className="col-1">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                    </div>
                    <div>
                        <p>{tuit.tuit}</p>
                    </div>
                    <TuitStats
                        key={tuit._id}
                        tuit={tuit}/>
                </div>
            </div>
        </div>

    );
};
export default TuitItem;