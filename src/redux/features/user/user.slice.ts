import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.types";

const initialState: UserState = {
    status: "idle",
    users: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    }
});

export default userSlice.reducer;