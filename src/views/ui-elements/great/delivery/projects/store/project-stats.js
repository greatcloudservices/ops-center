// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getData = createAsyncThunk('projects/getData', async params => {
  const response = await axios.get('/great/delivery/projects/stats', params)
  
  return {
    params,
    data: response.data.stages,
    allData: response.data.allData,
    totalPages: response.data.total
  }
})

export const projectStatsSlice = createSlice({
  name: 'projectStats',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload.data
      state.allData = action.payload.allData
      state.total = action.payload.totalPages
      state.params = action.payload.params
    })
  }
})

export default projectStatsSlice.reducer
