import "./index.css"
import ForegroundColors from "./ForegroundColors"
import Borders from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";

export default function Lab2() {
    return (
        <div id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3 className={"class-selector"}>3.1 Styling with the STYLE attribute</h3>
            <h4> 3.1.1 Styling elements with the style attribute </h4>
            <p style={{backgroundColor: "blue", color: "white"}}>
                Style attribute allows configuring look and feel
                right on the element. Although it's very convenient
                it is considered bad practice and you should avoid
                using the style attribute
            </p>

            <h4> 3.1.2 Importing CSS documents </h4>
            <p>
                Style attribute allows configuring look and feel
                right on the element. Although it's very convenient
                it is considered bad practice and you should avoid
                using the style attribute
            </p>

            <h4> 3.1.3 Selecting content with ID selectors</h4>
            <p id={"cadetblue-white"}>
                Instead of changing the look and feel of all the
                elements of the same name, e.g., P, we can refer to a specific element by its ID
            </p>

            <p id={"blueviolet-white"}>
                Here's another paragraph using a different ID and a different look and
                feel.
            </p>

            <h4 className={"class-selector"}> 3.1.4 Selecting content with class selectors </h4>
            <p className="class-selector">
                Instead of using IDs to refer to elements, you can use an element's CLASS attribute
            </p>

            <h4> 3.1.5 Selecting content based on the document structure </h4>
            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document structure selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be combined to refer elements in particular
                        places in the document
                        <p className="wd-selector-3">
                            This paragraph's red background is referenced as
                            <br/>
                            .selector-2 .selector3<br/>
                            meaning the descendant of some ancestor.<br/>
                            <span className="wd-selector-4">
          Whereas this span is a direct child of its parent
        </span><br/>
                            You can combine these relationships to create specific
                            styles depending on the document structure
                        </p>
                    </div>
                </div>
            </div>

            <ForegroundColors />
            <Borders/>
            <Corners/>
            <Dimensions/>
            <Positions/>
            <Zindex/>
            <Float/>
            <GridLayout/>
            <Flex/>
        </div>
    );
}
