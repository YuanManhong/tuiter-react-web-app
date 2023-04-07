import React from "react";
import TuitItem from "./tuitItem";
/*import tuits from "../tuits/tuits.json"*/
import {useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    const tuitsArray = useSelector((state) => state.tuits)
    return (
        <>
            <h3>Home</h3>
            <WhatsHappening/>
            <ul className="list-group rounded-0">
                {tuitsArray.map((tuit) =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit}/>
                )
                }
            </ul>
        </>
    );
};
export default HomeComponent;