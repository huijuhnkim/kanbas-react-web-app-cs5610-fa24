import {Link, Route, Routes} from "react-router-dom";
import FacultyRoute from "./FacultyRoute";
import DashboardControlBar from "./DashboardControlBar";
import FacultyDashboardCourses from "./FacultyDashboardCourses";
import StudentRoute from "./StudentRoute";
import {useDispatch, useSelector} from "react-redux";
import * as enrollmentClient from "./client"
import {useEffect, useState} from "react";
import StudentDashboardCourses from "./StudentDashboardCourses";
import {setEnrollments} from "./EnrollmentReducer";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; }) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const dispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState<boolean>(true);

    const fetchEnrollments = async () => {
        if (!currentUser) return
        try {
            const enrollments = await enrollmentClient.fetchEnrollments()
            dispatch(setEnrollments(enrollments))
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchEnrollments()
    }, []);

    function isEnrolled(course: any) {
        const match = enrollments.find(
            (enrollment : any) => enrollment.course === course._id && enrollment.user === currentUser._id);

        return !(match === undefined)
    }

    const enrolledCourses = (
        userId: string,
        courses: any[],
        enrollments: any[]
    ): any[] => {
        // Find all course IDs the user is enrolled in
        const enrolledCourseIds = enrollments
            .filter(enrollment => enrollment.user === userId)
            .map(enrollment => enrollment.course);

        // Filter courses to only include those the user is enrolled in
        return courses.filter(course =>
            enrolledCourseIds.includes(course._id)
        );
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <FacultyRoute>
                <DashboardControlBar
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    updateCourse={updateCourse}/>
                <FacultyDashboardCourses
                    currentUserCourseList={courses}
                    deleteCourse={deleteCourse}
                    setCourse={setCourse}/>
            </FacultyRoute>

            <StudentRoute>

                {isEnabled && (
                    <Link to={"/Kanbas/Dashboard/EnrolledCourses"}>
                        <button className={"btn btn-primary float-end"}
                                id={"wd-add-new-course-click"}
                                onClick={() => setIsEnabled(false)}>
                            Show Enrolled Courses
                        </button>
                    </Link>
                )}

                {!isEnabled && (
                    <Link to={"/Kanbas/Dashboard/AllCourses"}>
                        <button className={"btn btn-danger float-end"}
                                id={"wd-add-new-course-click"}
                                onClick={() => setIsEnabled(true)}>
                            Show All Courses
                        </button>
                    </Link>
                )}
            </StudentRoute>

            <Routes>
                <Route path={"/AllCourses"}
                       element={<StudentDashboardCourses
                           courses={courses}
                           isEnrolled={isEnrolled}/>}
                />

                <Route path={"/EnrolledCourses"}
                       element={<StudentDashboardCourses
                           courses={enrolledCourses(currentUser._id, courses, enrollments)}
                           isEnrolled={isEnrolled}/>}
                />
            </Routes>
        </div>
    );
}