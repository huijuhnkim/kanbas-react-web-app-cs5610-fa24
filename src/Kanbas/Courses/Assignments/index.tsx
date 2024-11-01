import {CiSearch} from "react-icons/ci";
import {FaPlus} from "react-icons/fa6";
import {BsGripVertical} from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import {PiNotePencil} from "react-icons/pi";
import {Link} from "react-router-dom";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import {assignments} from "../../Database";
import {useParams} from "react-router";

export default function Assignments() {
    const { cid } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === cid
    );



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
                    <Link to={`/Kanbas/Courses/${cid}/Assignments/Editor`}>
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

                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item wd-flex-row-container flex-align-items-stretch">
                                <div className={"wd-width-75px"}>
                                    <BsGripVertical className="me-2"/>
                                    <PiNotePencil color={"green"}/>
                                </div>
                                <div className={"flex-grow-1"}>
                                    <Link
                                        className="text-body-emphasis text-decoration-none"
                                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                        {assignment.title} <br/>
                                        <div className={"kanbas-text-small"}>
                                            <span className={"text-danger"}><b>{assignment.modules}</b></span> &ensp; | &ensp;
                                            <b>Not Available until:</b> {assignment.postdate} &ensp; | &ensp;
                                            <b>Due: </b> {assignment.due} &ensp; | &ensp;
                                            {assignment.points} pts

                                        </div>
                                    </Link>
                                </div>

                                <span className="float-end">
                                <FaCheckCircle className="text-success"/>
                                <FaEllipsisV className="ms-2"/>
                                </span>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
