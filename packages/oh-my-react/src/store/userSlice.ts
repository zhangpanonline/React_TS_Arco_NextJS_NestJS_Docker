import { createSlice, EmptyObject } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

export enum Role {
  admin = 'admin',
  user = 'user',
}
export interface UserState {
  role: Role | null | undefined | ''
}

const initialState: UserState = {
  role: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Role | null | undefined | ''>) => {
      state.role = action.payload
    }
  }
})

export const selectRole = (state: RootState) => state.user.role
export const selectLogin = (state: RootState) => !!state.user.role
export const { setRole } = userSlice.actions
export default userSlice.reducer