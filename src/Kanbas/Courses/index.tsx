import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa6";
// import { Navigate, Route, Routes} from "react-router";
import { useParams, useLocation } from "react-router";

export default function Courses() {
    const { cid } = useParams();
    const { pathname } = useLocation();

    const course = courses.find((course) => course._id === cid);
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-3 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>


        </div>
    );

}
