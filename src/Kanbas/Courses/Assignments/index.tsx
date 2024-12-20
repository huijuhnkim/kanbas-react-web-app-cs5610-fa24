
import {BsGripVertical} from "react-icons/bs";
import {PiNotePencil} from "react-icons/pi";
import {FaCheckCircle, FaTrash} from "react-icons/fa";
import {IoEllipsisVertical} from "react-icons/io5";

import AssignmentControlButtons from "./AssignmentControlButtons";
import {Link, useNavigate} from "react-router-dom";
import * as coursesClient from "../client"
import * as assignmentsClient from "./client"
import * as util from "../../utilities"

import {useParams} from "react-router";
import AssignmentControlBar from "./AssignmentControlBar";
import {useDispatch, useSelector} from "react-redux";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";
import {useEffect} from "react";
import {addAssignment, deleteAssignment, setAssignments} from "./reducer";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);

    const createAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = {name: "New Assignment", course: cid};
        const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(assignment));
        navigate(`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`);
    }

    const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    }

    return (

        <div id="wd-assignments">
            <AssignmentControlBar createAssignmentForCourse={createAssignmentForCourse} />

            <br/>
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-3"/> ASSIGNMENTS
                        <AssignmentControlButtons/></div>

                    <ul className="list-group">
                        {assignments.map((assignment: any) => (
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
                                            <b>Not Available until:</b> {util.convertDateTime(assignment.availableFrom)} &ensp; | &ensp;
                                            <b>Due: </b> {util.convertDateTime(assignment.due)} &ensp; | &ensp;
                                            {assignment.points} pts
                                        </div>
                                    </Link>
                                </div>

                                <span className="float-end">
                                    <FaTrash className="me-4"
                                             data-bs-toggle="modal"
                                             data-bs-target={`#wd-delete-assignment-dialog-${assignment._id}`}/>
                                    <FaCheckCircle className="text-success me-3"/>
                                    <IoEllipsisVertical className="ms-2"/>

                                    <DeleteAssignmentDialog assignmentId={assignment._id}
                                                            removeAssignment={removeAssignment}
                                                            modalId={`wd-delete-assignment-dialog-${assignment._id}`}/>
                                </span>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
