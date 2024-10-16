import ModulesControls from "./ModulesControls";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (
        <div>
            <div>
                <ModulesControls/><br/><br/><br/><br/>
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> Week 1
                            <ModuleControlButtons /></div>
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <LessonControlButtons />LEARNING OBJECTIVES
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <LessonControlButtons /> Introduction to the course
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <LessonControlButtons /> Learn what is Web Development
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <LessonControlButtons /> LESSON 1</li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <LessonControlButtons /> LESSON 2</li>
                        </ul>
                    </li>
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <ModuleControlButtons /> Week 2</div>
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <LessonControlButtons /> LEARNING OBJECTIVES
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <LessonControlButtons /> LESSON 1</li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <LessonControlButtons /> LESSON 2</li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    );
}
