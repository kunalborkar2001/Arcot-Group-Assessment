import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import mokeData from '../../../Data/moke.json'

// Define a type for the slice state
export interface chartDataState {
    value: string[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

// Define the initial state using that type
const initialState: chartDataState = {
    value: [],
    status: 'idle',
    error: null
}

export const fetchChartData = createAsyncThunk(
    'chartData/fetchChartData',
    async () => {
        try {
            // Perform your API call here
            // const response = await fetch("")
            // const data = await response.json()
            return mokeData
        } catch (error) {
            // Handle errors here
            throw new Error('Failed to fetch chart data')
        }
    }
)

export const chartDataSlice = createSlice({
    name: 'chartData',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // You can define other synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChartData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchChartData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Update state with the fetched data
                state.value = action.payload
            })
            .addCase(fetchChartData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? 'Failed to fetch chart data'
            })
    }
})

// Other code such as selectors can use the imported `RootState` type
export const selectChartData = (state: RootState) => state.chartData.value
export const selectChartDataStatus = (state: RootState) => state.chartData.status
export const selectChartDataError = (state: RootState) => state.chartData.error

export default chartDataSlice.reducer
