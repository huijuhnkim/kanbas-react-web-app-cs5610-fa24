import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <div id={"wd-account-navigation"}>
            <Link to={"/Kanbas/Account/Signin"}> Sign In </Link> <br/>
            <Link to={"/Kanbas/Account/Signup"}> Sign Up </Link> <br/>
            <Link to={"/Kanbas/Account/Profile"}> Profile </Link> <br/>
        </div>
    )
}