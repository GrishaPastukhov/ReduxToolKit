import { configureStore } from '@reduxjs/toolkit'
import cashSlice  from './cashReducer'
import nickSclice from './nickReducer'
import usersSlice  from './usersReducer'

export const store = configureStore({
  reducer: {
    cash: cashSlice,
    nick: nickSclice,
    users: usersSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch