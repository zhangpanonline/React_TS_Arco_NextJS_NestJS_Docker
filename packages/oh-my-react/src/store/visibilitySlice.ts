import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter: (state, action: PayloadAction<string>) => {
      return action.payload
    }
  }
})

export const { setVisibilityFilter } = visibilitySlice.actions
export default visibilitySlice.reducer