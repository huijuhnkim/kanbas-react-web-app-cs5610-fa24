export default function Borders() {
    return (
        <div id="wd-css-borders">
            <h2>Borders</h2>
            <h3> 3.1.9 Styling Borders </h3>
            <p className="wd-border-fat wd-border-red wd-border-solid">
                Solid fat red border</p>
            <p className="wd-border-thin wd-border-blue wd-border-dashed">
                Dashed thin blue border</p>

            <div id="wd-css-paddings">
                <h2>3.1.10 Padding</h2>
                <div className="wd-padded-top-left wd-border-fat
                                wd-border-red wd-border-solid
                                wd-bg-color-yellow">
                    Padded top left
                </div>

            </div>
            <div className="wd-padded-bottom-right wd-border-fat
                            wd-border-blue wd-border-solid
                            wd-bg-color-yellow">
                Padded bottom right
            </div>

            <div className="wd-padding-fat wd-border-fat
                            wd-border-yellow wd-border-solid
                            wd-bg-color-blue wd-fg-color-white">
                Padded all around
            </div>


        </div>
    )
}