import {createSlice} from "@reduxjs/toolkit";

const info = {
    user: {
        firstName: 'Donald',
        lastName: 'Duck',
        handle: '@donaldDuck',
        profilePicture: 'donaldDuck.png',
        bannerPicture: 'castle.jpg',
        bio: 'I am a duck. I like to swim and quack.',
        website: 'https://duck.com',
        location: 'Duckburg, CA',
        dateOfBirth: '1/1/1966',
        dateJoined: '1/1/2000',
        followingCount: 340,
        followersCount: 223,
        totalTuits: 1000,
    }
}

const profileSlice = createSlice({
    name: 'profiles',
    initialState: info,
    reducers: {
        updateProfile: (state, action) => {
            state.user = action.payload;
        }
    }
});

export default profileSlice.reducer;

export const {updateProfile} = profileSlice.actions;