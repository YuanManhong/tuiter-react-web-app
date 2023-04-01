import {findTuitsThunk} from "../../services/tuits-thunks";
import TuitItem from "./tuits-item";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <div className="list-group border border-light">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tuit => <TuitItem key={tuit._id} post={tuit}/>)
            }

        </div>
    ); }

export default TuitsList;
