import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json"

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: "tuits",
    initialState: tuits,
    reducers: {
        updateLikesCount(state, action) {
            const {postId, isLiked} = action.payload;
            const postIndex = state.findIndex((post) => post.id === postId);

            if (postIndex >= 0) {
                state[postIndex].likes += isLiked ? 1 : -1;
            }
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })

        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

    }
});

export default tuitsSlice.reducer;
export const {updateLikesCount, createTuit, deleteTuit} = tuitsSlice.actions;