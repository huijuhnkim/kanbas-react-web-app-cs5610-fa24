import { Link } from "react-router-dom";

// React
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import {GoInbox} from "react-icons/go";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" style={{width: 120}}
        className="list-group rounded-0 position-fixed bottom-0 top-0
        d-none d-md-block bg-black z-2 ">
            <a href="https://www.northeastern.edu/" id="wd-neu-link"
               className={"list-group-item bg-black border-0 text-center"}
               target="_blank" rel="noreferrer">
            <img src="/image/neu-logo.png"
                 width={"75px"}
                 alt={"Northeastern"}/>
            </a>

            <Link to={"/Kanbas/Account"} id="wd-account-link"
                className={"list-group-item text-center border-0 bg-black text-white"}>
                <FaRegCircleUser className={"fs-1 text text-white"}/><br/>
                Account</Link>

            <Link to={"/Kanbas/Dashboard"} id="wd-dashboard-link"
                className={"list-group-item text-center border-0 bg-black text-white"}>
                <AiOutlineDashboard className={"fs-1 text text-danger"}/><br/>
                Dashboard
            </Link>

            <Link to={"/Kanbas/Dashboard"} id="wd-course-link"
            className={"list-group-item text-center border-0 bg-white text-danger"}>
                <LiaBookSolid className={"fs-1 text text-danger"}/><br/>
                Courses
            </Link>

            <Link to={"/Kanbas/Calendar"} id="wd-calendar-link"
            className={"list-group-item text-center border-0 bg-black text-white"}>
                <IoCalendarOutline className={"fs-1 text text-danger"}/><br/>
                Calendar
            </Link>

            <Link to={"/Kanbas/Inbox"} id="wd-inbox-link"
            className={"list-group-item text-center border-0 bg-black text-white"}>
                <GoInbox className={"fs-1 text text-danger"}/><br/>
                Inbox
            </Link>

            <Link to={"/Labs"} id="wd-labs-link"
            className={"list-group-item text-center border-0 bg-black text-white"}>
                <LiaCogSolid className={"fs-1 text text-danger"}/><br/>
                Labs
            </Link>
        </div>
    );}
