import {CiSearch} from "react-icons/ci";
import {FaPlus} from "react-icons/fa6";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import {PiNotePencil} from "react-icons/pi";
import {Link} from "react-router-dom";

export default function Assignments() {
    return (
        <div id="wd-assignments">

            <div className={"row"}>
                <div className={"col input-group w-25 justify-content-lg-start"}>
                    <span className={"input-group-text"}><CiSearch/></span>
                    <input id="wd-search-assignment"
                           placeholder={"Search..."}
                           className={"form-control mr-sm-2 w-25"}
                           type={"search"}/>
                </div>

                <div className={"col d-flex justify-content-end"}>
                    <button id="wd-add-assignment-group"
                            className={"btn btn-secondary me-1"}><FaPlus/> Group
                    </button>
                    <Link to={"/Kanbas/Courses/5200/Assignments/Editor"}>
                        <button id="wd-add-assignment"
                                className={"btn  btn-danger"}> <FaPlus/> Assignment</button>
                    </Link>

                </div>
            </div>
            <br/>
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/> ASSIGNMENTS
                        <AssignmentControlButtons/></div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-grid-row list-group-item p-2 ps-2">
                            <div className={"kanbas-grid-col-left-sidebar"}>
                                <BsGripVertical className="me-2 fs-3"/> <PiNotePencil color={"green"}/>
                            </div>
                            <div className={"kanbas-grid-col-main-content"}>
                                <Link to={"/Kanbas/Courses/5200/Assignments/Editor"}
                                      className={"text-body text-decoration-none"}>
                                    A1
                                </Link>
                                <div className={"kanbas-assignment-subtext"}>
                                    <span className={"text-danger"}><b>Multiple Modules</b></span>
                                    &ensp; | &ensp; <b>Not Available</b> until May 6 at 12:00am
                                    &ensp; | &ensp; <b>Due</b> May 13 at 11:59pm
                                    &ensp; | &ensp; 100 pts
                                </div>
                            </div>

                            <LessonControlButtons/>
                        </li>
                    </ul>

                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-grid-row list-group-item p-2 ps-2">
                            <div className={"kanbas-grid-col-left-sidebar"}>
                                <BsGripVertical className="me-2 fs-3"/> <PiNotePencil color={"green"}/>
                            </div>
                            <div className={"kanbas-grid-col-main-content"}>
                                <Link to={"/Kanbas/Courses/5200/Assignments/Editor"}
                                      className={"text-body text-decoration-none"}>
                                    A2
                                </Link>
                                <div className={"kanbas-assignment-subtext"}>
                                    <span className={"text-danger"}><b>Multiple Modules</b></span>
                                    &ensp; | &ensp; <b>Not Available</b> until May 6 at 12:00am
                                    &ensp; | &ensp; <b>Due</b> May 13 at 11:59pm
                                    &ensp; | &ensp; 100 pts
                                </div>
                            </div>

                            <LessonControlButtons/>
                        </li>
                    </ul>

                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-grid-row list-group-item p-2 ps-2">
                            <div className={"kanbas-grid-col-left-sidebar"}>
                                <BsGripVertical className="me-2 fs-3"/> <PiNotePencil color={"green"}/>
                            </div>
                            <div className={"kanbas-grid-col-main-content"}>
                                <Link to={"/Kanbas/Courses/5200/Assignments/Editor"}
                                      className={"text-body text-decoration-none"}>
                                    A3
                                </Link>
                                <div className={"kanbas-assignment-subtext"}>
                                    <span className={"text-danger"}><b>Multiple Modules</b></span>
                                    &ensp; | &ensp; <b>Not Available</b> until May 6 at 12:00am
                                    &ensp; | &ensp; <b>Due</b> May 13 at 11:59pm
                                    &ensp; | &ensp; 100 pts
                                </div>
                            </div>

                            <LessonControlButtons/>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
