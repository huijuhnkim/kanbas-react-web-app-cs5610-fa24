import {Link} from "react-router-dom";

export default function Navigation() {
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
}