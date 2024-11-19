import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
    enrollments: enrollments,
}

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers : {
        addEnrollment: (state, {payload: enrollment}) => {
            state.enrollments = [...state.enrollments, enrollment] as any;
        },

        deleteEnrollment: (state, {payload: enrollment}) => {
            state.enrollments = state.enrollments.filter((e: any) =>
                e._id !== enrollment._id
            )
        }
    }
})

export const {addEnrollment, deleteEnrollment} = enrollmentSlice.actions;
export default enrollmentSlice.reducer;