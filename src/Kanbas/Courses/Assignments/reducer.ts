import { createSlice } from "@reduxjs/toolkit";
import { assignments, courses} from "../../Database"

const initialState = {
    assignments: assignments,
}

const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, {payload: assignment}) => {
            const newAssignment: any = {
                _id: course._id

            }
        }
    }
})

