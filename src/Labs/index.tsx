import { Route, Routes, Navigate } from "react-router";
import {Provider} from "react-redux";
import store from "./store";

import TOC from "./TOC";
import Lab1 from './Lab1'
import Lab2 from './Lab2'
import Lab3 from './Lab3'
import Lab4 from './Lab4'


export default function Index() {
    return (
        <Provider store={store}>
            <div>
                <h1>Labs</h1>
                <h3>Name: Hui Juhn Kim</h3>
                <h3>Section Number: 02</h3>
                <TOC/>
                <Routes>
                    <Route path="/" element={<Navigate to="Labs"/>}/>
                    <Route path="Lab1" element={<Lab1/>}/>
                    <Route path="Lab2" element={<Lab2/>}/>
                    <Route path="Lab3/*" element={<Lab3/>}/>
                    <Route path={"Lab4"} element={<Lab4/>}/>
                </Routes>
            </div>
        </Provider>
    );
}