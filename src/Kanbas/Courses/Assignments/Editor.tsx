import {FaCalendar} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useLocation, useParams} from "react-router";
import {addAssignment, updateAssignment} from "./reducer";
import {useDispatch, useSelector} from "react-redux";

export default function AssignmentEditor() {

    function isNewAssignment() {
        console.log(`assignment ID: ${assignment._id}, aid: ${aid}`)
        return (assignment._id !== aid)
    }

    function handleSave() {
        if (isNewAssignment()) {
            console.log("adding assignment...")
            dispatch(addAssignment(assignment))
        } else {
            console.log("updating assignment...")
            dispatch(updateAssignment(assignment))
        }
    }

    const {cid} = useParams();
    const {aid} = useParams();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    let assignment = assignments.find((assignment: any) => assignment._id === aid);

    return (
        <div>
            <label htmlFor={"wd-assignment-name"} className={"pb-2"}> Assignment Name</label>

            <input className={"form-control"}
                   id={"wd-assignment-name"}
                   placeholder={assignment.title}
                   onChange={(e) => dispatch(updateAssignment({
                       ...assignment, title: e.target.value
                   }))}>
            </input>

            <textarea id={"wd-assignment-description"}
                      className={"form-control mt-4"}
                      rows={12}
                      value={assignment.description}
                      onChange={(e) => dispatch(updateAssignment({
                          ...assignment, description: e.target.value
                      }))}>
            </textarea>

            <form>
                <div className={"row mt-3"}>
                    <label htmlFor={"wd-assignment-points"} className={"col-sm-2 col-form-label"}>
                        <span className={"float-end"}>Points</span> </label>
                    <div className={"col-sm-10"}>
                        <input type="number"
                               className={"form-control"}
                               value={assignment.points}
                               onChange={(e) => dispatch(updateAssignment({
                                   ...assignment, points: e.target.value
                               }))}/>
                    </div>
                </div>

                <div className={"row mt-3"}>
                    <label htmlFor={"wd-assignment-group"} className={"col-sm-2 col-form-label"}>
                        <span className={"float-end"}>Assignment Group</span> </label>
                    <div className={"col-sm-10"}>
                        <select className="form-select">
                            <option selected>ASSIGNMENTS</option>
                            <option value="1">QUIZZES</option>
                            <option value="2">TESTS</option>
                        </select>
                    </div>
                </div>

                <div className={"row mt-3"}>
                    <label htmlFor={"wd-assignment-group"} className={"col-sm-2 col-form-label"}>
                        <span className={"float-end"}>Display Grade as</span> </label>
                    <div className={"col-sm-10"}>
                        <select className="form-select">
                            <option selected>Percentage</option>
                            <option value="1">Points</option>
                        </select>
                    </div>
                </div>

                <div className={"row mt-3"}>
                    <label htmlFor={"wd-assignment-group"} className={"col-sm-2 col-form-label"}>
                        <span className={"float-end"}>Submission Type</span> </label>
                    <div className={"col border border-gray p-3"}>
                        <select className="form-select">
                            <option selected>Online</option>
                            <option value="1">Offline</option>
                        </select>
                        <div className={"mt-4"}>
                            <b>Online Entry Options </b>
                            <div className="form-check mt-4">
                                <label className="form-check-label" htmlFor="r5">
                                    Text Entry </label>
                                <input className="form-check-input" type="checkbox"
                                       id="r5"/>
                            </div>
                            <div className="form-check mt-4">
                                <label className="form-check-label" htmlFor="r3">
                                    Website URL </label>
                                <input className="form-check-input" type="checkbox" checked={true}
                                       id="r3"/>
                            </div>
                            <div className="form-check mt-4">
                                <label className="form-check-label" htmlFor="r5">
                                    Media Recordings </label>
                                <input className="form-check-input" type="checkbox"
                                       id="r5"/>
                            </div>
                            <div className="form-check mt-4">
                                <label className="form-check-label" htmlFor="r2">
                                    Student Annotation </label>
                                <input className="form-check-input" type="checkbox"
                                       id="r2"/>
                            </div>
                            <div className="form-check mt-4">
                                <label className="form-check-label" htmlFor="r1">
                                    File Uploads </label>
                                <input className="form-check-input" type="checkbox"
                                       id="r1"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"row mt-3"}>
                    <label htmlFor={"wd-assignment-group"} className={"col-sm-2 col-form-label"}>
                        <span className={"float-end"}>Assign </span> </label>
                    <div className={"col border border-gray p-3"}>
                        <label htmlFor={"wd-assignment-due"}>
                            <b>Due</b>
                        </label>
                        <div className="input-group mb-3" id={"wd-assignment-due"}>
                            <input type="text" className="form-control"
                                   value={assignment.due}
                                   onChange={(e) => dispatch(updateAssignment({
                                       ...assignment, due: e.target.value
                                   }))}/>
                            <span className="input-group-text"><FaCalendar/></span>
                        </div>

                        <div className="mt-3 row">
                            <div className={"col md-6"}>
                                <label htmlFor={"wd-assignment-from"}>
                                    <b>Available from</b>
                                </label>
                                <div className="input-group" id={"wd-assignment-from"}>
                                    <input type="text" className="form-control"
                                           value={assignment.availableFrom}
                                           onChange={(e) => dispatch(updateAssignment({
                                               ...assignment, availableFrom: e.target.value
                                           }))}/>
                                    <span className="input-group-text"><FaCalendar/></span>
                                </div>
                            </div>
                            <div className={"col md-6"}>
                                <label htmlFor={"wd-assignment-until"}>
                                    <b>Until</b>
                                </label>
                                <div className="input-group" id={"wd-assignment-until"}>
                                    <input type="text"
                                           className="form-control"
                                           value={assignment.availableUntil}
                                           onChange={(e) => dispatch(updateAssignment({
                                               ...assignment, points: e.target.value
                                           }))}/>
                                    <span className="input-group-text"><FaCalendar/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <hr/>
            <div className={"col d-flex justify-content-end"}>

            <Link to={`/Kanbas/Courses/${cid}/Assignments/`}>
                    <button id="wd-add-assignment-group"
                            className={"btn btn-secondary me-2"}>
                        Cancel
                    </button>
                </Link>


                <Link to={`/Kanbas/Courses/${cid}/Assignments/`}>
                    <button id="wd-add-assignment-group"
                            className={"btn btn-danger me-2"}
                            onClick={handleSave}>
                        Save
                    </button>
                </Link>

            </div>
        </div>
    );
}
