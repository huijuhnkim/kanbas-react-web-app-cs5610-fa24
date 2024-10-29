import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react'
import {add} from "./AddReducer"
export default function AddRedux() {
    const [a, setA] = useState(12)
    const [b, setB] = useState(23)
    const { sum } = useSelector((state: any) => state.addReducer)
    const dispatch = useDispatch();

    return (
        <div className={"w-25"} id={"wd-add-redux"}>
            <h2> Add Redux </h2>
            <h3> {a} + {b} = {sum} </h3>
            <input type={"number"}
                   defaultValue={a} onChange={(e) => setA(parseInt(e.target.value))}
                   className={"form-control"}/>

            <input type={"number"}
                   defaultValue={b} onChange={(e) => setB(parseInt(e.target.value))}
                   className={"form-control"}/>

            <button className={"btn btn-primary"} onClick={() => dispatch(add({a, b}))}>
                Add
            </button>

            <hr/>
        </div>
    )
}