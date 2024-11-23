import { useSelector } from "react-redux";
import { Route, Routes} from "react-router-dom";
// import {enrollments} from "../Database";
import ProtectedRoute from "./ProtectedRoute";
import DashboardControlBar from "./DashboardControlBar";
import FacultyDashboardCourses from "./FacultyDashboardCourses";
import StudentDashboardAllCourses from "./StudentDashboardAllCourses";
import StudentDashboardEnrolledCourses from "./StudentDashboardEnrolledCourses";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; }) {

    function isEnrolled(course: any) {
        return true
    }

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
                <ProtectedRoute>
                    <DashboardControlBar
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        updateCourse={updateCourse}/>
                    <FacultyDashboardCourses
                        currentUserCourseList={courses}
                        deleteCourse={deleteCourse}
                        setCourse={setCourse}/>
                </ProtectedRoute>

            <div id={"wd-enroll"}>
                <button className={"btn btn-primary float-end"}
                        id={"wd-add-new-course-click"}>
                    Enrollments
                </button>
            </div>

            <Routes>
                <Route path={"/AllCourses"}
                       element={<StudentDashboardAllCourses
                           courses={courses}
                           isEnrolled={isEnrolled}/>}
                />

                <Route path={"/EnrolledCourses"}
                       element={<StudentDashboardEnrolledCourses/>}
                />

            </Routes>

            {/*<StudentDashboardAllCourses courses={courses} isEnrolled={isEnrolled}/>*/}

        </div>
    );
}