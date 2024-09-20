import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";

import Lab1 from './Lab1'
import Lab2 from './Lab2'
import Lab3 from './Lab3'

export default function Index() {
    return (
        <div>
            <h1>Labs by: Hui Juhn Kim</h1>
            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Labs"/>}/>
                <Route path="Lab1" element={<Lab1/>}/>
                <Route path="Lab2" element={<Lab2/>}/>
                <Route path="Lab3" element={<Lab3/>}/>
                <a href={"https://github.com/huijuhnkim/kanbas-react-web-app-cs5610-fa24"}
                   id={"wd-github"} target="_blank" rel="noreferrer"> GitHub </a>
            </Routes>
        </div>
    )
}