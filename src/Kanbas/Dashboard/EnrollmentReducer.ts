import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [],
}

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers : {
        addEnrollment: (state, {payload: enrollment}) => {
            state.enrollments = [...state.enrollments, enrollment] as any;
        },

        deleteEnrollment: (state, {payload: {userId, courseId}}) => {
            state.enrollments = state.enrollments.filter((e: any) =>
                !(e.user === userId && e.course === courseId)
            )
        },
        updateEnrollment: (state, {payload: enrollment}) => {
            state.enrollments = state.enrollments.map((e: any) =>
                e._id === enrollment._id ? enrollment : e
            ) as any;
        },
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        }
    }
})



export const {addEnrollment, deleteEnrollment, updateEnrollment, setEnrollments} = enrollmentSlice.actions;
export default enrollmentSlice.reducer;