import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as enrollmentsClient from "./client"
import {addEnrollment, deleteEnrollment} from "./EnrollmentReducer";

export default function StudentDashboardCourses(
    {courses, isEnrolled} : {
        courses: any[],
        isEnrolled: (course: any) => boolean
    }

) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const handleEnroll = async (courseId: any) => {
        const newEnrollment = await enrollmentsClient.enrollUserToCourse(currentUser._id, courseId)
        dispatch(addEnrollment(newEnrollment))
    }

    const handleUnenroll = async (courseId: any) => {
        const unenrollmentResult = await enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId);
        dispatch(deleteEnrollment(unenrollmentResult));
    };

    return (
        <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {courses.map((course: any) => (
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                  className="wd-dashboard-course-link text-decoration-none text-dark">
                                <img src={`/image/neu-logo.png`} height={160}
                                     alt={"course thumbnail"}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        {course.name} </h5>
                                    <p className="wd-dashboard-course-title card-text overflow-y-hidden"
                                       style={{maxHeight: 100}}>
                                        {course.description} </p>
                                </div>

                            </Link>
                                    {!isEnrolled(course) &&
                                        <button className="btn btn-primary float-end mb-3" onClick={()=> handleEnroll(course._id)}>
                                            Enroll
                                        </button>
                                    }

                                    {isEnrolled(course) &&
                                        <button className={"btn btn-danger float-end mb-3"} onClick={() => handleUnenroll(course._id)}>
                                            Unenroll
                                        </button>
                                    }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}