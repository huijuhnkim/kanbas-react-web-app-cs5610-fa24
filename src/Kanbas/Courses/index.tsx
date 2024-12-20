import { FaAlignJustify } from "react-icons/fa6";
import { useParams, useLocation } from "react-router";
import Home from "./Home";
import CoursesNavigation from "./Navigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";

export default function Courses({courses}: {courses:any[]}) {
    const { cid } = useParams();
    const { pathname } = useLocation();

    const course = courses.find((course) => course._id === cid);

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
