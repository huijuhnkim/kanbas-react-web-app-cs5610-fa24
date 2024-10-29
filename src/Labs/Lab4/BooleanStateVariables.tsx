import React, {useState} from 'react';
import {MdDone} from "react-icons/md";

export default function BooleanStateVariables() {
    const [done, setDone] = useState(true);

    return (
        <div id={"wd-boolean-state-variables"}>
            <h2> Boolean State Variables </h2>
            <p>{done ? "done" : "Not Done"}</p>
            <label className={"form-control"}>
                <input type="checkbox" checked={done} onChange={() => setDone(!done)}
                       /> Done
            </label>

            {done && <div className="alert alert-success">
                Yay! You are DONE!
            </div>}

            <hr/>
        </div>
    )
}