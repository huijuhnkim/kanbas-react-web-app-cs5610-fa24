import { Link } from "react-router-dom";
// import * as db from "./Database";
// import {useState} from "react";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; }) {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // Optional for smooth scrolling
        });
    }
    //
    // const [courses, setCourses] = useState<any[]>(db.courses);
    //
    // const [course, setCourse] = useState<any> ({
    //     _id: "0", name: "New Course", number: "New Number",
    //     startDate: "2024-09-10", endDate: "2024-12-15",
    //     image: "/image/neu-logo.png", description: "New Description"
    // })
    //
    // const addNewCourse = () => {
    //     const newCourse = {...course, _id: new Date().getTime().toString() };
    //     setCourses([...courses, {...course, ...newCourse}]);
    // }
    //
    // const deleteCourse = (courseId: string) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // }
    //
    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>

            <h5> New Course </h5>
            <button className={"btn btn-primary float-end"}
                    id={"wd-add-new-course-click"}
                    onClick={addNewCourse}> Add
            </button>

            <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
                Update
            </button>
            <br/>
            <input defaultValue={course.name} className="form-control mb-2"
                   onChange={(e) => setCourse({...course, name: e.target.value})}/>
            <textarea defaultValue={course.description} className="form-control"
                      onChange={(e) => setCourse({...course, description: e.target.value})}/>

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
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
        </div>);
}