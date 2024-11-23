export default function DashboardControlBar(
    {  course, setCourse, addNewCourse, updateCourse }: {
        course: any;
        setCourse: (course: any) => void;
        addNewCourse: () => void;
        updateCourse: () => void; }) {

    return (
        <div id={"wd-add-update-new-course"}>
            <button className={"btn btn-primary float-end"}
                    id={"wd-add-new-course-click"}
                    onClick={addNewCourse}> Add
            </button>

            <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
                Update
            </button>
            <br/>
            <input defaultValue={course.name} className="form-control mb-2 "
                   onChange={(e) => setCourse({...course, name: e.target.value})}/>
            <textarea defaultValue={course.description} className="form-control"
                      onChange={(e) => setCourse({...course, description: e.target.value})}/>
        </div>
    )
}