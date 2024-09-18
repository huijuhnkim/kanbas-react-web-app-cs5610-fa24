export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2> Lab 1 </h2>
            <h3> 2. 6 Heading Tags </h3>
            <h4>This is h4 heading. </h4>
            <h5>This is h5 heading. </h5>
            <h6>This is h6 heading. </h6>

            <h3> 2. 7 Paragraph Tags </h3>
            <p id="wd-p-1">
                This is the first paragraph. The paragraph tag is used to format
                vertical gaps between long pieces of text like this one.
            </p>
            <p id="wd-p-2">
                This is the second paragraph. Even though there is a deliberate white
                gap between the paragraph above and this paragraph, by default
                browsers render them as one contiguous piece of text as shown here on
                the right.
            </p>
            <p id="wd-p-3">
                This is the third paragraph. Wrap each paragraph with the paragraph
                tag to tell browsers to render the gaps.
            </p>

            <h3> 2. 8 List Tags </h3>
            <h4> Ordered Lists </h4>
            <ol id={"ordered-list"}>
                <li> First Element</li>
                <li> Second Element</li>
                <li> Third Element</li>
                <li> Fourth Element</li>
            </ol>

            <h4> Unordered Lists </h4>
            <ul id={"unordered-list"}>
                <li> First Unordered Element</li>
                <li> Second Unordered Element</li>
                <li> Third Unordered Element</li>
                <li> Fourth Unordered Element</li>
            </ul>

            <h3> 2.9 Table Tags </h3>
            <table border={1} width="100%">
                <thead>
                <tr>
                    <th> Date</th>
                    <th> Used Card</th>
                    <th> Description</th>
                    <th> Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> 2024-09-17</td>
                    <td> Apple Card</td>
                    <td> AppleCare+ Subscription</td>
                    <td> 9.99</td>
                </tr>

                <tr>
                    <td> 2024-09-17</td>
                    <td> Chase Card</td>
                    <td> Amazon Prime Subscription</td>
                    <td> 14.99</td>
                </tr>

                <tr>
                    <td> 2024-09-15</td>
                    <td> Chase Card</td>
                    <td> Whole Foods</td>
                    <td> 42.78</td>
                </tr>

                <tr>
                    <td> 2024-09-13</td>
                    <td> Chase Card</td>
                    <td> J P Licks</td>
                    <td> 19.99</td>
                </tr>
                </tbody>

                <tfoot>
                <tr>
                    <td colSpan={3}> Sum</td>
                    <td> 999.99</td>
                </tr>
                </tfoot>
            </table>

            <h3> 2. 10 Image Tag </h3>
            <h4> Image from the Web </h4>
            <img
                id={"wd-samplepic-web"}
                src={"https://win.gg/_next/image/?url=https%3A%2F%2Fapi.win.gg%2Fwp-content%2Fuploads%2F2022%2F01%2FFaker.png&w=1920&q=75"}
                width="480"
                alt={"faker shush"}
            />
            <br/>
            <img id='wd-samplepic'
                 src="/image/sample-picture.jpg"
                 width="480"
                 alt="sample"/>

            <h3> 2. 11 Form Tags </h3>
            <h4> 2. 11. 1 Text Fields </h4>
            <input
                type={"text"}
                placeholder={"Enter Your Name"}
                title={"Name"}
            />

            <h4> 2. 11. 2 Text Area </h4>
            <textarea
                cols={57}
                rows={25}
                placeholder={"Dump looooong text here"}
                title={"Terms of Agreement"}
            />

            <h4> 2. 11. 3 Buttons </h4>
            <button
                id={"wd-button"}
                type={"button"}
                onClick={() => alert("This is a button!")}
            >
                Is this a button?
            </button>

            <h4> 2. 11. 4 File Upload Button </h4>
            <input
                id={"wd-upload-button"}
                type={"file"}
            />

            <h4> 2. 11. 5 Radio Buttons </h4>

            <label> How do you spell the CS department?</label><br/>

            <input type={"radio"} id={"right-name-cory"} name={"right-name"}/>
            <label htmlFor={"right-name-cory"}>Cory College of CS</label><br/>
            <input type={"radio"} id={"right-name-khoury"} name={"right-name"}/>
            <label htmlFor={"right-name-cory"}>Khoury College of CS</label><br/>
            <input type={"radio"} id={"right-name-curry"} name={"right-name"}/>
            <label htmlFor={"right-name-cory"}>Curry College of CS</label><br/>

            <h4> 2. 11. 6 Checkboxes </h4>
            <label>What courses have you taken so far? </label><br/>
            <input type={"checkbox"} name={"chk-course"} id={"cs5800"}/>
            <label htmlFor={"cs5800"}> CS5800 Algorithms </label><br/>
            <input type={"checkbox"} name={"chk-course"} id={"cs5520"}/>
            <label htmlFor={"cs5520"}> CS5520 Mobile Application Development </label><br/>
            <input type={"checkbox"} name={"chk-course"} id={"cs5610"}/>
            <label htmlFor={"cs5610"}> CS5610 Web Development </label><br/>

            <h4> 2. 11. 7 Dropdowns </h4>
            <label htmlFor={"dropdown-country"}> Date of birth: </label><br/>
            <select id={"dropdown-country"}>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
            </select>

            <select id={"dropdown-country"}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
            </select>

            <h4> 2. 11. 8 Other HTML Field Types </h4>
            <h5> Email </h5>
            <label htmlFor={"email"}> E-mail: </label>
            <input type={"email"} id={"email"}/><br/>

            <h5> Number Field</h5>
            <label htmlFor={"number"}> Grade (out of 10): </label>
            <input type={"number"} id={"number"} placeholder={"10"} min={"0"} max={"10"}/>

            <h5> Range </h5>
            <label htmlFor={"range"}> Level of Satisfaction </label>
            <input type={"range"} id={"range"} min={"0"} max={"100"}/>

            <h5> Date </h5>
            <label htmlFor={"date"}> Today's Date? </label>
            <input type={"date"} id={"date"} name={"date"} />

            <h4> 2.12 Anchor Tags </h4>
            <a href={"https://linkedin.com/in/huijuhnkim"}> My LinkedIn Profile </a>



        </div>
    );
}