import {FaCalendar} from "react-icons/fa";
import {assignments} from "../../Database";
import {useLocation} from "react-router-dom";

export default function AssignmentEditor() {
    const { pathname } = useLocation();
    const assignmentList = assignments.filter((assignment) => pathname.includes(assignment._id));

    return (
        <div>
            <label htmlFor={"wd-assignment-name"} className={"pb-1"}> Assignment Name</label>
            {assignmentList.map((assignment) => (
                <input className={"form-control"}
                       id={"wd-assignment-name"}
                       value={`${pathname.includes(assignment._id) ? assignment.title : ""}`}>
                </input>
            ))}

            <textarea id={"wd-assignment-description"}
                      className={"form-control mt-3"}
                      rows={12}
                      placeholder={"The assignment is available online\n\n" +
                          "Submit a link to the landing page of your Web application running on Netlify.\n\n" +
                          "The landing page should include the following:\n\n" +
                          "• \tYour full name and section\n" +
                          "• \tLinks to each of the lab assignments\n" +
                          "• \tLink to the Kanbas application\n" +
                          "• \tLinks to all relevant source code repositories\n\n" +
                          "The Kanbas application should include a link to navigate back to the landing page."}>

            </textarea>

            <form>
                <div className={"row mt-3"}>
                    <label htmlFor={"wd-assignment-points"} className={"col-sm-2 col-form-label"}>
                        <span className={"float-end"}>Points</span> </label>
                    <div className={"col-sm-10"}>
                        {assignmentList.map((assignment) => (
                        <input type="number" className={"form-control"}
                               value={`${pathname.includes(assignment._id) ? assignment.points : ""}`}/>
                            ))}
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
                            {assignmentList.map((assignment) => (
                            <input type="text" className="form-control"
                                   value={`${pathname.includes(assignment._id) ? assignment.due : ""}`}/>
                                ))}
                            <span className="input-group-text"><FaCalendar/></span>
                        </div>

                        <div className="mt-3 row">
                            <label htmlFor={"wd-assignment-from"}>
                                <b>Available from</b>
                            </label>
                            <div className="col input-group mb-1 p-1" id={"wd-assignment-from"}>
                                {assignmentList.map((assignment) => (
                                <input type="text" className="form-control"
                                       value={`${pathname.includes(assignment._id) ? assignment.postdate : ""}`}/>
                                    ))}
                                <span className="input-group-text"><FaCalendar/></span>
                            </div>


                            <div className="col input-group mb-1 p-1" id={"wd-assignment-until"}>
                                <input type="text" className="form-control"/>
                                <span className="input-group-text"><FaCalendar/></span>
                            </div>


                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
