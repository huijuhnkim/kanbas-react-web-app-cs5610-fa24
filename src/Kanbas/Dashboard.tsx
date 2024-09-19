import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id={"wd-dashboard"}>
            <h1 id={"wd-dashboard-title"}> Dashboard </h1>
            <hr/>
            <h2 id={"wd-dashboard-published"}> Published Courses (12) </h2>
            <hr/>
            <div id={"wd-dashboard-courses"}>
                <div className={"wd-dashboard-course-link"}>
                    <Link to={"/Kanbas/Courses/1234/Home"}>
                        <img src={"https://onextrapixel.com/wp-content/uploads/2016/04/reactjs-thumb.jpg"} width={"200"}
                             alt={"React JS"}/>
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className={"wd-dashboard-course-title"}>
                                Full Stack Software Developer
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>

                </div>
            </div>
            <br/>
            <div id={"wd-dashboard-courses"}>
                <div className={"wd-dashboard-course-link"}>
                    <Link to={"/Kanbas/Courses/5800/Home"}>
                        <img
                            src={"https://online.stanford.edu/sites/default/files/styles/widescreen_medium/public/2018-03/engineering-computer-science-algorithms-design-analysis_soe-ycsalgorithms.png?h=cd2a7045&itok=wc8_7qOC"}
                            width={"200"} alt={"Algo"}/>
                        <div>
                            <h5> CS5800 Algorithms </h5>
                            <p className={"wd-dashboard-course-title"}>
                                Solving Problems with computational thinking
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>

                </div>
            </div>
            <br/>
            <div id={"wd-dashboard-courses"}>
                <div className={"wd-dashboard-course-link"}>
                    <Link to={"/Kanbas/Courses/5200/Home"}>
                        <img
                            src={"https://www.shutterstock.com/shutterstock/photos/2111606243/display_1500/stock-vector-database-management-systems-or-dbms-software-tool-usage-outline-diagram-application-or-website-2111606243.jpg"}
                            width={"200"} alt={"Database"}/>
                        <div>
                            <h5> CS5200 Database Management Systems </h5>
                            <p className={"wd-dashboard-course-title"}>
                                relational database management systems as a class of software systems
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
            <br/>
            <div id={"wd-dashboard-courses"}>
                <div className={"wd-dashboard-course-link"}>
                    <Link to={"/Kanbas/Courses/5520/Home"}>
                        <img
                            src={"https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Op_aBoFgTwCnnbdg"}
                            width={"200"} alt={"Xcode"}/>
                        <div>
                            <h5> CS5520 Mobile Application Development </h5>
                            <p className={"wd-dashboard-course-title"}>
                                Principles of mobile application design and development
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
            <br/>
            <div id={"wd-dashboard-courses"}>
                <div className={"wd-dashboard-course-link"}>
                    <Link to={"/Kanbas/Courses/5097/Home"}>
                        <img
                            src={"https://www.apple.com/v/apple-vision-pro/e/images/overview/hero/hero_us_startframe__bj4ciwxazquq_large_2x.jpg"}
                            width={"200"} alt={"visionpro"}/>
                        <div>
                            <h5> CS5097 Mixed Reality </h5>
                            <p className={"wd-dashboard-course-title"}>
                                foundation in XR fundamentals
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
            <br/>
            <div id={"wd-dashboard-courses"}>
                <div className={"wd-dashboard-course-link"}>
                    <Link to={"/Kanbas/Courses/6140/Home"}>
                        <img
                            src={"https://d3caycb064h6u1.cloudfront.net/wp-content/uploads/2021/06/Machine_Learning.jpg"}
                            width={"200"} alt={"visionpro"}/>
                        <div>
                            <h5> CS6140 Machine Learning </h5>
                            <p className={"wd-dashboard-course-title"}>
                                Empowering intelligent computer systems
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
            <br/>
            <div id={"wd-dashboard-courses"}>
                <div className={"wd-dashboard-course-link"}>
                    <Link to={"/Kanbas/Courses/5340/Home"}>
                        <img
                            src={"https://1.bp.blogspot.com/-Dl75B-X8I3w/X0iVLnOl6hI/AAAAAAAASFo/cGnVv6O7kl4esUuNPikK895dF-T-yFwFwCLcBGAsYHQ/s1600-rw/human-with-ai.jpg"}
                            width={"200"} alt={"hci"}/>
                        <div>
                            <h5> CS5340 Computer/Human Interaction </h5>
                            <p className={"wd-dashboard-course-title"}>
                                Empowering intelligent computer systems
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}