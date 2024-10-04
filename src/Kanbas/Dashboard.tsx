import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id={"wd-dashboard"}>
            <h1 id={"wd-dashboard-title"}> Dashboard </h1>
            <hr/>
            <h2 id={"wd-dashboard-published"}> Published Courses (12) </h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to={"/Kanbas/Courses/1234/Home"}>
                                <img src="/image/react.svg"
                                     width="100%"
                                     height={160}
                                     alt={"alt"}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to={"/Kanbas/Courses/1234/Home"}>
                                <img
                                    src="https://online.stanford.edu/sites/default/files/styles/widescreen_medium/public/2018-03/engineering-computer-science-algorithms-design-analysis_soe-ycsalgorithms.png?h=cd2a7045&itok=wc8_7qOC"
                                    width="100%" height={160} alt={"alt"}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5800 Algorithms
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Solving Problems with computational thinking
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to={"/Kanbas/Courses/5340/Home"}>
                                <img
                                    src={"https://1.bp.blogspot.com/-Dl75B-X8I3w/X0iVLnOl6hI/AAAAAAAASFo/cGnVv6O7kl4esUuNPikK895dF-T-yFwFwCLcBGAsYHQ/s1600-rw/human-with-ai.jpg"}
                                    width="100%" height={160} alt={"alt"}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5340 Computer/Human Interaction
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Bridging the gap between humans and computers
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to={"/Kanbas/Courses/6140/Home"}>
                                <img
                                    src={"https://d3caycb064h6u1.cloudfront.net/wp-content/uploads/2021/06/Machine_Learning.jpg"}
                                    width="100%" height={160} alt={"alt"}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS6140 Machine Learning
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Empowering artificial intelligence
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to={"/Kanbas/Courses/5097/Home"}>
                                <center><img
                                    src={"https://www.apple.com/v/apple-vision-pro/e/images/overview/hero/hero_us_startframe__bj4ciwxazquq_large_2x.jpg"}
                                    height={160}
                                    alt={"alt"}/></center>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5097 Mixed Reality
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        foundation in XR fundamentals
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to={"/Kanbas/Courses/5520/Home"}>
                                <img
                                    src={"https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Op_aBoFgTwCnnbdg"}
                                    width="100%" height={160} alt={"alt"}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5520 Mobile App Dev
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Principles of mobile app design
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to={"/Kanbas/Courses/5200/Home"}>
                                <img
                                    src={"https://www.shutterstock.com/shutterstock/photos/2111606243/display_1500/stock-vector-database-management-systems-or-dbms-software-tool-usage-outline-diagram-application-or-website-2111606243.jpg"}
                                    width="100%" height={160} alt={"alt"}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5200 Database Management Systems
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Relational database management systems as a class of software systems
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div id={"wd-dashboard-courses"}>*/}
            {/*    <div className={"wd-dashboard-course-link"}>*/}
            {/*        <Link to={"/Kanbas/Courses/5340/Home"}>*/}
            {/*            <img*/}
            {/*                src={"https://1.bp.blogspot.com/-Dl75B-X8I3w/X0iVLnOl6hI/AAAAAAAASFo/cGnVv6O7kl4esUuNPikK895dF-T-yFwFwCLcBGAsYHQ/s1600-rw/human-with-ai.jpg"}*/}
            {/*                width={"200"} alt={"hci"}/>*/}
            {/*            <div>*/}
            {/*                <h5> CS5340 Computer/Human Interaction </h5>*/}
            {/*                <p className={"wd-dashboard-course-title"}>*/}
            {/*                    Empowering intelligent computer systems*/}
            {/*                </p>*/}
            {/*                <button> Go</button>*/}
            {/*            </div>*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}