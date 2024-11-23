import {Link} from "react-router-dom";

export default function FacultyDashboardCourses(
    {currentUserCourseList, deleteCourse, setCourse}: {
        currentUserCourseList: any[],
        deleteCourse: (state: any) => void;
        setCourse: (state: any) => void;
    }
) {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <div>
                <h2 id="wd-dashboard-published">Published Courses ({currentUserCourseList.length})</h2>
                <hr/>
            </div>

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {currentUserCourseList.map((course) => (
                        <div className="wd-dashboard-course col" style={{width: "300px"}}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                      className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <img src={`/image/${course._id}.png`} width="100%" height={160}
                                         alt={"course thumbnail"}/>
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden"
                                           style={{maxHeight: 100}}>
                                            {course.description} </p>
                                        <button className="btn btn-primary"> Go</button>

                                        <button onClick={(event) => {
                                            event.preventDefault()
                                            deleteCourse(course._id)
                                        }} className={"btn btn-danger float-end"}>
                                            Delete
                                        </button>

                                        <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    scrollToTop()
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end">
                                            Edit
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
)
}