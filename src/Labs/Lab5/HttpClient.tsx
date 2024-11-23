import {useEffect, useState} from "react";
import * as client from "./client"

export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

    const fetchWelcomeOnClick = async () => {
        const response = await client.fetchWelcomeMessage()
        setWelcomeOnClick(response)
    }

    const fetchWelcomeOnLoad = async () => {
        const response = await client.fetchWelcomeMessage()
        setWelcomeOnLoad(response)
    }
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);

    return (
        <div>
            <h3> HTTP Client </h3>
            <h4> Requesting on Click </h4>
            <button className="btn btn-primary me-2"
                    onClick={fetchWelcomeOnClick}>
                Fetch Welcome
            </button>
            <br/>
            Response from server: <b>{welcomeOnClick}</b>

            <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
            <hr/>
        </div>
    )
}