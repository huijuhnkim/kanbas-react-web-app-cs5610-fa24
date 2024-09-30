export default function Corners() {
    return (
        <div id={"wd-css-borders"}>
            <h3> 3.1.11 Rounded Corners </h3>
            <p className={"wd-rounded-corners-top " +
                "wd-border-thin " +
                "wd-border-blue " +
                "wd-border-solid " +
                "wd-border-padding-fat"}>

                Rounded Corners on the top
            </p>

            <p className={"wd-rounded-corners-bottom " +
                "wd-border-thin " +
                "wd-border-blue " +
                "wd-border-solid " +
                "wd-padding-fat"}>
                Rounded corners at the bottom
            </p>

            <p className="wd-rounded-corners-all-around
     wd-border-thin wd-border-blue wd-border-solid
     wd-padding-fat">
                Rounded corners all around
            </p>
            <p className="wd-rounded-corners-inline
     wd-border-thin wd-border-blue wd-border-solid
     wd-padding-fat">
                Different rounded corners
            </p>
        </div>
    )
}