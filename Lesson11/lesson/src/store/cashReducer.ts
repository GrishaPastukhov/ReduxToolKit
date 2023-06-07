import { createSlice, isAction } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


 export interface ICash {
    cash: number,
 }

 const initialState: ICash = {   
    cash: 0,
  }

export const cashSlice = createSlice({
    name: 'cash',
    initialState,
    reducers: {
      ADD_CASH: (state, action: PayloadAction<number>) => {
        state.cash = state.cash + action.payload
      },
      GET_CASH: (state, action:PayloadAction<number>) => {
        state.cash = state.cash - action.payload
      }
    },
  })


export const { ADD_CASH , GET_CASH} = cashSlice.actions

export default cashSlice.reducer