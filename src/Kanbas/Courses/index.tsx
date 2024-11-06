import { FaAlignJustify } from "react-icons/fa6";
import { useParams, useLocation } from "react-router";
import Home from "./Home";
import CoursesNavigation from "./Navigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import {assignments} from "../Database";

export default function Courses({courses}: {courses:any[]}) {
    const { cid } = useParams();
    const { pathname } = useLocation();

    const course = courses.find((course) => course._id === cid);

    const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: "New Assignment",
        course: cid,
        modules: "Multiple Modules",
        availableFrom: "2024-01-01",
        due: "2024-01-01",
        points: "100"
    }

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-3 fs-4 mb-1"/>
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>

            <div className="d-flex">
                <div className={"d-none d-xl-block"}>
                    <CoursesNavigation/>
                </div>

                <div className={"flex-fill"}>
                    <Routes>
                        <Route path="/"
                               element={<Navigate to="Home"/>}/>
                        <Route path="Home" element={<Home/>}/>
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Assignments/"
                               element={<Assignments/>}/>
                        <Route path={"Assignments/new"}
                               element={<AssignmentEditor/>}/>
                        <Route path="Assignments/:aid"
                               element={<AssignmentEditor/>}/>
                        <Route path="People" element={<PeopleTable/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}
