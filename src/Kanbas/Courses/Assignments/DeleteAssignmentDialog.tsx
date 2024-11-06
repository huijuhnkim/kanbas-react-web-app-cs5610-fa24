import {useDispatch} from "react-redux";
import {deleteAssignment} from "../Assignments/reducer";

export default function DeleteAssignmentDialog(
    { assignment } : {assignment: any}
) {
    const dispatch = useDispatch();

    return (
        <div id="wd-delete-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Confirm Delete? </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    {/*<div className="modal-body">*/}

                    {/*</div>*/}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button onClick={() => {
                            dispatch(deleteAssignment(assignment));
                        }}
                                type="button"
                                data-bs-dismiss="modal"
                                className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}