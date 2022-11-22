// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getData = createAsyncThunk('utilization/getData', async params => {
  const response = await axios.get('/great/delivery/utilization', params)
  
  return {
    params,
    data: response.data.resources,
    allData: response.data.allData,
    totalPages: response.data.total,
    statistics: response.data.statistics
  }
})

export const utilizationSlice = createSlice({
  name: 'utilization',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    statistics: {}
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload.data
      state.allData = action.payload.allData
      state.total = action.payload.totalPages
      state.params = action.payload.params
      state.statistics = action.payload.statistics
     })
  }
})

export default utilizationSlice.reducer
