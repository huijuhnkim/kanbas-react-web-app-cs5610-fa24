
import {BsGripVertical} from "react-icons/bs";
import {PiNotePencil} from "react-icons/pi";
import {FaCheckCircle, FaTrash} from "react-icons/fa";
import {IoEllipsisVertical} from "react-icons/io5";

import AssignmentControlButtons from "./AssignmentControlButtons";
import {Link} from "react-router-dom";

import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import AssignmentControlBar from "./AssignmentControlBar";
import {useSelector} from "react-redux";
import {deleteAssignment} from "./reducer";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";


export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    const courseAssignment: any = assignments.filter(
        (assignment: any) => assignment.course === cid
    );

    return (

        <div id="wd-assignments">
            <AssignmentControlBar/>

            <br/>
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-3"/> ASSIGNMENTS
                        <AssignmentControlButtons/></div>

                    <ul className="list-group">
                        {courseAssignment.map((assignment: any) => (
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
                                            <b>Not Available until:</b> {assignment.availableFrom} &ensp; | &ensp;
                                            <b>Due: </b> {assignment.due} &ensp; | &ensp;
                                            {assignment.points} pts
                                        </div>
                                    </Link>
                                </div>

                                <span className="float-end">
                                    <FaTrash className="me-4"
                                             data-bs-toggle="modal"
                                             data-bs-target="#wd-delete-assignment-dialog"/>
                                    <FaCheckCircle className="text-success me-3"/>
                                    <IoEllipsisVertical className="ms-2"/>

                                    <DeleteAssignmentDialog assignmentId={assignment._id}/>
                                </span>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>


        </div>
    );
}
