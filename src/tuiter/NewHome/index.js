import React from "react";
import PostItem from "./postItem";
/*import tuits from "../tuits/tuits.json"*/
import {useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";

const NewHomeComponent = () => {
    const tuitsArray = useSelector((state) => state.tuits)
    return (
        <>
            <h3>Home</h3>
            <WhatsHappening/>
            <ul className="list-group rounded-0">
                {tuitsArray.map((tuit) =>
                    <PostItem
                        key={tuit._id}
                        post={tuit}/>
                )
                }
            </ul>
        </>
    );
};
export default NewHomeComponent;