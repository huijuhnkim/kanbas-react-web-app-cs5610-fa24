import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: []
}

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers : {
        addEnrollment: (state, {payload: {courseId, userId}}) => {
            state.enrollments = [...state.enrollments, {
                _id: Date.now(),
                course: courseId,
                user: userId
            }] as any;
        }
    }
})

export const {addEnrollment} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;