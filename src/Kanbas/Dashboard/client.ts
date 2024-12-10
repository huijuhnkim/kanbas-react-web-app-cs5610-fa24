import axios from "axios"
import {COURSES_API} from "../Account/client";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const fetchEnrollments = async () => {
    const { data } = await axios.get(`${ENROLLMENTS_API}`);
    return data;
}

export const enrollUserToCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${courseId}`, { userId })
    return response.data;
}

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${courseId}`, { data: { userId } });
    console.log("response: ", response);
    console.log("response.data: ", response.data);
    return response.data;
}