import React from "react";
import TuitsList from "./tuits-list";
/*import tuits from "../tuits/home-tuits.json"*/
import {useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
/*
    const tuitsArray = useSelector((state) => state.tuitsData.tuit)
*/
    return (
        <>
            <h3>Home</h3>
            <WhatsHappening/>
            {/*<ul className="list-group rounded-0">
                {tuitsArray.map((tuit) =>
                    <TuitsList
                        key={tuit._id}
                        post={tuit}/>
                )
                }
            </ul>*/}
            <TuitsList/>
        </>
    );
};
export default HomeComponent;