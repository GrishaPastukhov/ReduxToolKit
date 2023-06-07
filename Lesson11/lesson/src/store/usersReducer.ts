import { createSlice, isAction } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    users: string[]
}

const initialState:IUser = {
       users: [],
 }

 export const usersSlice = createSlice({
    name:'users', 
    initialState,
    reducers: {
        ADD_USER: (state, action: PayloadAction<string>) => {
            state.users = [...state.users, action.payload]
        },
        REMOVE_USER: (state, action:PayloadAction<string>) => {
            state.users = state.users.filter((user: string) => user !== action.payload)
        },
    },
 });

 export const { ADD_USER, REMOVE_USER } = usersSlice.actions;
 export default usersSlice.reducer;