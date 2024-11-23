import {Link} from "react-router-dom";

export default function StudentDashboardAllCourses(
    {courses, isEnrolled} : {
        courses: any,
        isEnrolled: (course: any) => Boolean
    }
) {
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

                                    {!isEnrolled(course) &&
                                        <button className="btn btn-primary">
                                            Enroll
                                        </button>
                                    }

                                    {isEnrolled(course) &&
                                        <button className={"btn btn-danger float-end"}>
                                            Unenroll
                                        </button>
                                    }


                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}