import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    EmployeeData: null,
    NeededVacancies:0,
    JobRole: null,
}

const planSlice = createSlice({
    name: "planSlice",
    initialState: initialState,
    reducers: {
        setPlan: (state, action) => {
            state.EmployeeData = action.payload.EmployeeData,
            state.JobRole = action.payload.JobRole,
            state.NeededVacancies = action.payload.NeededVacancies
        },
        
        updatePlan: (state, action) => {
            state.EmployeeData = action.payload.EmployeeData,
            state.JobRole = action.payload.JobRole,
            state.NeededVacancies = action.payload.NeededVacancies
        },

        DeletePlan: (state) => {
            state.EmployeeData = null,
            state.JobRole = null,
            state.NeededVacancies = 0
        }
    }
})

export default planSlice.reducer;