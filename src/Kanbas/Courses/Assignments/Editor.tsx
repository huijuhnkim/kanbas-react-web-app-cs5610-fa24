import {text} from "node:stream/consumers";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h4>Assignment Name</h4>
            <input id="wd-name" value="A1 - ENV + HTML"/><br/><br/>
            <textarea id="wd-description" cols={45} rows={10}>
        The assignment is available online Submit a link to the landing page of
                your Web application running on Netlify. The landing page should
                include the following: Your full name and section Links to each
                of the lab assignments Link to the Kanbas application Links to
                all relevant source code repositories The Kanbas application
                should include a link to navigate back to the landing page.
      </textarea>
            <br/>
            <br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option> ASSIGNMENTS</option>
                            <option> QUIZ</option>
                        </select>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as </label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option> Percentage</option>
                            <option> Points</option>
                        </select>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type </label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option> Online</option>
                            <option> Offline</option>
                        </select><br/><br/>
                        <label htmlFor={"wd-online-entry-option"}>Online Entry Options</label><br/>
                        <input type={"checkbox"} name={"wd-online-entry-option"} id={"wd-text-entry"}/>
                        <label htmlFor={"wd-text-entry"}>Text Entry </label><br/>
                        <input type={"checkbox"} name={"wd-online-entry-option"} id={"wd-website-url"}/>
                        <label htmlFor={"wd-website-url"}>Website URL </label><br/>
                        <input type={"checkbox"} name={"wd-online-entry-option"} id={"wd-media-recordings"}/>
                        <label htmlFor={"wd-media-recordings"}>Media Recording </label><br/>
                        <input type={"checkbox"} name={"wd-online-entry-option"} id={"wd-student-annotation"}/>
                        <label htmlFor={"wd-student-annotation"}>Student Annotation</label><br/>
                        <input type={"checkbox"} name={"wd-online-entry-option"} id={"wd-file-upload"}/>
                        <label htmlFor={"wd-file-upload"}>File Uploads </label><br/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Assign </label>
                    </td>
                    <td>
                        <label htmlFor={"wd-assign-to"}>Assign to</label><br/>
                        <select id="wd-assign-to">
                            <option> Everyone</option>
                            <option> Failing students</option>
                        </select>
                        <br/><br/>
                        <label htmlFor={"wd-due-date"}>Due</label><br/>
                        <input type={"date"} name={"wd-due-date"} value={"2024-05-13"}/>
                        <br/><br/>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor={"wd-available-from"}>Available from</label><br/>
                                    <input type={"date"} name={"wd-available-from"} value={"2024-05-06"}/>
                                </td>
                                <td>
                                    <label htmlFor={"wd-available-until"}>Until</label><br/>
                                    <input type={"date"} name={"wd-available-until"} value={"2024-05-20"}/>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr/>

            <button> Cancel</button>
            <button> Save</button>


        </div>
    );
}
