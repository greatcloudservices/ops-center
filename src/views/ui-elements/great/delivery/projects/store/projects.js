// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getData = createAsyncThunk('projects/getData', async params => {
  const response = await axios.get('/great/delivery/projects', params)
  
  return {
    params,
    data: response.data.projects,
    allData: response.data.allData,
    totalPages: response.data.total,
    groupedByTaskType: response.data.groupedByTaskType,
    groupedByPartnership: response.data.groupedByPartnership
  }
})

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    groupedByTaskType: [],
    groupedByPartnership: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload.data
      state.allData = action.payload.allData
      state.total = action.payload.totalPages
      state.params = action.payload.params
      state.groupedByTaskType = action.payload.groupedByTaskType
      state.groupedByPartnership = action.payload.groupedByPartnership
    })
  }
})

export default projectsSlice.reducer
