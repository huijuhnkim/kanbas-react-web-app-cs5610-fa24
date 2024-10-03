import { Link } from "react-router-dom";
export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation"
            className={"wd list-group fs-5 rounded-0 "}>
            <Link id="wd-course-home-link"
                  className={"list-group-item active border border-0"}
                  to="/Kanbas/Courses/1234/Home"
                    style={{fontSize: 16}}>
                    Home
            </Link>
            <Link id="wd-course-modules-link"
                  className={"list-group-item border text-danger border-0"}
                  to="/Kanbas/Courses/1234/Modules"
                  style={{fontSize: 16}}>
                Modules
            </Link>
            <Link id="wd-course-piazza-link"
                  className={"list-group-item border text-danger border-0"}
                  to="/Kanbas/Courses/1234/Piazza"
                  style={{fontSize: 16}}>
                Piazza
            </Link>
            <Link id="wd-course-zoom-link"
                  className={"list-group-item border text-danger border-0"}
                  to="/Kanbas/Courses/1234/Zoom"
                  style={{fontSize: 16}}>
                Zoom
            </Link>
            <Link id="wd-course-quizzes-link"
                  className={"list-group-item border text-danger border-0"}
                  to="/Kanbas/Courses/1234/Assignments"
                  style={{fontSize: 16}}>
                Assignments
            </Link>
            <Link id="wd-course-assignments-link"
                  className={"list-group-item border text-danger border-0"}
                  to="/Kanbas/Courses/1234/Quizzes"
                  style={{fontSize: 16}}>
                Quizzes
            </Link>
            <Link id="wd-course-grades-link"
                  className={"list-group-item border text-danger border-0"}
                  to="/Kanbas/Courses/1234/Grades"
                  style={{fontSize: 16}}>
                Grades
            </Link>
            <Link id="wd-course-people-link"
                  className={"list-group-item border text-danger border-0"}
                  to="/Kanbas/Courses/1234/People"
                  style={{fontSize: 16}}>
                People
            </Link>
        </div>
    );}
