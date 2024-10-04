import {FaCalendar} from "react-icons/fa";

export default function AssignmentEditor() {
    return (

        <div>
            <label htmlFor={"wd-assignment-name"} className={"pb-1"}> Assignment Name</label>
            <input className={"form-control"}
                   id={"wd-assignment-name"}
                   value={"A1"}>
            </input>

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
                        <input type="number" className={"form-control"} value={"100"}/>
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
                        <label htmlFor={"wd-assignment-due"} >
                            <b>Due</b>
                        </label>
                        <div className="input-group mb-3" id={"wd-assignment-due"}>
                            <input type="text" className="form-control"/>
                            <span className="input-group-text"><FaCalendar/></span>
                        </div>

                        <div className="mt-3 row">
                            <label htmlFor={"wd-assignment-from"}>
                                <b>Available from</b>
                            </label>
                            <div className="col input-group mb-1 p-1" id={"wd-assignment-from"}>
                                <input type="text" className="form-control"/>
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
        //   <div id="wd-assignments-editor">
        //       <h5>Assignment Name</h5>
        //       <input id="wd-name" value="A1 - ENV + HTML"/><br/><br/>
        //       <textarea id="wd-description" cols={45} rows={10}>
        //   The assignment is available online Submit a link to the landing page of
        //           your Web application running on Netlify. The landing page should
        //           include the following: Your full name and section Links to each
        //           of the lab assignments Link to the Kanbas application Links to
        //           all relevant source code repositories The Kanbas application
        //           should include a link to navigate back to the landing page.
        // </textarea>
        //       <br/>
        //       <br/>
        //       <table>
        //       <tbody>
        //           <tr>
        //               <td align="right" valign="top">
        //                   <label htmlFor="wd-points">Points</label>
        //               </td>
        //               <td>
        //                   <input id="wd-points" value={100}/>
        //               </td>
        //           </tr>
        //
        //           <tr>
        //               <td align="right" valign="top">
        //                   <label htmlFor="wd-group">Assignment Group</label>
        //               </td>
        //               <td>
        //                   <select id="wd-group">
        //                       <option> ASSIGNMENTS</option>
        //                       <option> QUIZ</option>
        //                   </select>
        //               </td>
        //           </tr>
        //
        //           <tr>
        //               <td align="right" valign="top">
        //                   <label htmlFor="wd-display-grade-as">Display Grade as </label>
        //               </td>
        //               <td>
        //                   <select id="wd-display-grade-as">
        //                       <option> Percentage</option>
        //                       <option> Points</option>
        //                   </select>
        //               </td>
        //           </tr>
        //
        //           <tr>
        //               <td align="right" valign="top">
        //                   <label htmlFor="wd-submission-type">Submission Type </label>
        //               </td>
        //               <td>
        //                   <select id="wd-submission-type">
        //                       <option> Online</option>
        //                       <option> Offline</option>
      //                   </select><br/><br/>
      //                   <label htmlFor={"wd-online-entry-option"}>Online Entry Options</label><br/>
      //                   <input type={"checkbox"} name={"wd-online-entry-option"} id={"wd-text-entry"}/>
      //                   <label htmlFor={"wd-text-entry"}>Text Entry </label><br/>
      //                   <input type={"checkbox"} name={"wd-online-entry-option"} id={"wd-website-url"}/>
      //                   <label htmlFor={"wd-website-url"}>Website URL </label><br/>
      //                   <input type={"checkbox"} name={"wd-online-entry-option"} id={"wd-media-recordings"}/>
      //                   <label htmlFor={"wd-media-recordings"}>Media Recording </label><br/>
      //                   <input type={"checkbox"} name={"wd-online-entry-option"} id={"wd-student-annotation"}/>
      //                   <label htmlFor={"wd-student-annotation"}>Student Annotation</label><br/>
      //                   <input type={"checkbox"} name={"wd-online-entry-option"} id={"wd-file-upload"}/>
      //                   <label htmlFor={"wd-file-upload"}>File Uploads </label><br/>
      //               </td>
      //           </tr>
      //
      //           <tr>
      //               <td align="right" valign="top">
      //                   <label htmlFor="wd-display-grade-as">Assign </label>
      //               </td>
      //               <td>
      //                   <label htmlFor={"wd-assign-to"}>Assign to</label><br/>
      //                   <select id="wd-assign-to">
      //                       <option> Everyone</option>
      //                       <option> Failing students</option>
      //                   </select>
      //                   <br/><br/>
      //                   <label htmlFor={"wd-due-date"}>Due</label><br/>
      //                   <input type={"date"} name={"wd-due-date"} value={"2024-05-13"}/>
      //                   <br/><br/>
      //                   <table>
      //                   <tbody>
      //                   <tr>
      //                           <td>
      //                               <label htmlFor={"wd-available-from"}>Available from</label><br/>
      //                               <input type={"date"} name={"wd-available-from"} value={"2024-05-06"}/>
      //                           </td>
      //                           <td>
      //                               <label htmlFor={"wd-available-until"}>Until</label><br/>
      //                               <input type={"date"} name={"wd-available-until"} value={"2024-05-20"}/>
      //                           </td>
      //                   </tr>
      //                   </tbody>
      //                   </table>
      //               </td>
      //           </tr>
      //       </tbody>
      //       </table>
      //       <hr/>
      //
      //       <button> Cancel</button>
      //       <button> Save</button>
      //
      //
      //   </div>
    );
}
