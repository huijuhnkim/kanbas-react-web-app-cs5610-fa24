import {AiOutlineStop} from "react-icons/ai";
import {BiImport} from "react-icons/bi";
import {LiaFileImportSolid} from "react-icons/lia";
import {IoMdHome, IoMdStats} from "react-icons/io";
import {TfiAnnouncement} from "react-icons/tfi";
import {FaBell} from "react-icons/fa6";
import {FaCheckCircle} from "react-icons/fa";

export default function CourseStatus() {
    return (
        <div id="wd-course-status"
        className={"list-group text-nowrap"}>
            <h2>Course Status</h2>
            <div>
                <button className={"btn btn-secondary border w-50"}><AiOutlineStop/>
                    &nbsp; Unpublish</button>
                <button className={"btn btn-success border w-50"}><FaCheckCircle/>
                    &nbsp; Publish</button>
            </div>


            <button className={"btn btn-secondary border w-100 text-start"}>
                <BiImport/> &nbsp; Import Existing Content </button>

            <button className={"btn btn-secondary border w-100 text-start"}>
                <LiaFileImportSolid/> &nbsp; Import From Commons </button>

            <button className={"btn btn-secondary border w-100 text-start"}>
                <IoMdHome /> &nbsp; Choose Home Page </button>
            <button className={"btn btn-secondary border w-100 text-start"}>
                <IoMdStats /> &nbsp; View Course Screen
            </button>
            <button className={"btn btn-secondary border w-100 text-start"}>
                <TfiAnnouncement /> &nbsp; New Announcement
            </button>
            <button className={"btn btn-secondary border w-100 text-start"}>
                <IoMdStats/> &nbsp; New Analytics
            </button>
            <button className={"btn btn-secondary border w-100 text-start"}>
                <FaBell/> &nbsp; View Course Notifications
            </button>

        </div>
    );
}