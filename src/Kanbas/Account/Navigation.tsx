import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"]
    const pathname = useLocation()

    if (currentUser !== null) {
        return (
            <div id={"wd-account-navigation"}
                 className={"wd list-group fs-5 rounded-0"}>
                <Link id={"wd-account-signin-link"}
                      className={"list-group-item active border border-0"}
                      style={{fontSize: 16}}
                      to={"/Kanbas/Account/Signin"}>
                    Sign In
                </Link>

                <Link id={"wd-account-signup-link"}
                      className={"list-group-item text-danger border border-0"}
                      style={{fontSize: 16}}
                      to={"/Kanbas/Account/Signup"}>
                    Sign Up
                </Link>

                <Link id={"wd-account-profile-link"}
                      className={"list-group-item text-danger border border-0"}
                      style={{fontSize: 16}}
                      to={"/Kanbas/Account/Profile"}>
                    Profile
                </Link>
            </div>
        )
    } else {
        return (
            <div id={"wd-account-navigation"}
                 className={"wd list-group fs-5 rounded-0"}>
                <Link id={"wd-account-signin-link"}
                      className={"list-group-item active border border-0"}
                      style={{fontSize: 16}}
                      to={"/Kanbas/Account/Signin"}>
                    Sign In
                </Link>

                <Link id={"wd-account-signup-link"}
                      className={"list-group-item text-danger border border-0"}
                      style={{fontSize: 16}}
                      to={"/Kanbas/Account/Signup"}>
                    Sign Up
                </Link>
            </div>
        )
    }
}