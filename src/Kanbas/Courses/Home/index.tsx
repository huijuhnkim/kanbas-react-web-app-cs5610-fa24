import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div className="d-flex" id={"wd-home"}>
            <div className="flex-fill offset-1">
                <Modules />
            </div>

            <div style={{width: 240}}
                     className="d-none d-xxl-block offset-1">
                <CourseStatus />
            </div>
        </div>
    );
}
