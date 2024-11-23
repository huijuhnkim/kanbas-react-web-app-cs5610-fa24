import {useState} from "react";

export default function QueryParameters() {
    const [a, setA] = useState("34")
    const [b, setB] = useState("32")
    const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER

    return(
        <div>
            <h3> Query Parameters </h3>
            <input className={"form-control"}
                   defaultValue={a}
                   type={"number"}
                   onChange={(e) => setA(e.target.value)}/>

            <input className={"form-control"}
                   type={"number"}
                   defaultValue={b}
                   onChange={(e) => setB(e.target.value)}/>

            <a className={"btn btn-primary me-2"}
               href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
                {a} + {b}
            </a>

            <a className={"btn btn-danger me-2"}
               href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
                {a} - {b}
            </a>

            <a className={"btn btn-dark me-2"}
               href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
                {a} * {b}
            </a>

            <a className={"btn btn-secondary me-2"}
               href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
                {a} / {b}
            </a>
        </div>
    )
}