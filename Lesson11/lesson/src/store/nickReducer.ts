import { createSlice, isAction } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface INick {
    username: string
}

const initialState:INick = {
      username: "nickname",
    }

export const nickSlice = createSlice({
name: 'nick',
initialState,
reducers: {
    CHANGE_NICKNAME: (state, action:PayloadAction<string>) => {
        state.username = action.payload
    },
},
})

export const { CHANGE_NICKNAME } = nickSlice.actions;
export default nickSlice.reducer;