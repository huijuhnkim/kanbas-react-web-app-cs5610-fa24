import {CiSearch} from "react-icons/ci";
import {FaPlus} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import {addAssignment} from "./reducer";

export default function AssignmentControlBar() {
    const {cid} = useParams()

    let newAssignment = {
        _id: new Date().getTime().toString(),
        title: "New Assignment",
        description: "Enter assignment description",
        course: cid,
        modules: "Multiple Modules",
        availableFrom: "2024-01-01",
        availableUntil: "2024-01-01",
        due: "2024-01-01",
        points: "100"
    }

    const dispatch = useDispatch();

    return (
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
                        className={"btn btn-secondary me-2"}>
                    <FaPlus/>
                    Group
                </button>

                <Link to={`/Kanbas/Courses/${cid}/Assignments/${newAssignment._id}`}>
                    <button id="wd-add-assignment"
                            className={"btn  btn-danger"}
                            onClick={()=>dispatch(addAssignment(newAssignment))}>
                        <FaPlus/> Assignment
                    </button>
                </Link>

            </div>
        </div>
    )
}