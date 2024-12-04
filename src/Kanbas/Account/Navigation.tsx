import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {useLocation} from "react-router";

export default function AccountNavigation() {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();
    const active = (path: string) => (pathname.includes(path) ? "active" : "text-danger")

    return (
        <div id="wd-account-navigation" className="wd list-group">
            {links.map((link) => (
                <Link key={link} to={`/Kanbas/Account/${link}`} className={`wd list-group-item rounded-0 border-0 ${active(link)}`}> {link} </Link>
            ))}
            {currentUser && currentUser.role === "ADMIN" && (
                <Link to={`/Kanbas/Account/Users`} className={`wd list-group-item rounded-0 border-0 ${active("Users")}`}> Users </Link> )}
        </div>
    );
}