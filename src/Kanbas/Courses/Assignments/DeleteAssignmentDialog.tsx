export default function DeleteAssignmentDialog(
    { assignmentId, removeAssignment, modalId } : {
        assignmentId: string;
        removeAssignment: (assignmentId: string) => void;
        modalId: string;
    }
) {

    return (
        <div id={modalId} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Confirm Delete? </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button onClick={() => removeAssignment(assignmentId)}
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