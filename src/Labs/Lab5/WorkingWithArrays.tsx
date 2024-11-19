import {useState} from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER

export default function WorkingWithArrays() {
    const API = `${REMOTE_SERVER}/lab5/todos`
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a server",
        due: "2021-09-09",
        completed: false,
    });

    return (
        <div>
            <h3> Working with arrays </h3>

            <div>
                <h4>Creating new Items in an Array</h4>
                <a className="btn btn-primary"
                   href={`${API}/create`}>
                    Create Todo
                </a>
                <hr/>

                <h4>Deleting from an Array</h4>
                <a className="btn btn-primary float-end"
                   href={`${API}/${todo.id}/delete`}>
                    Delete Todo with ID = {todo.id} </a>
                <input defaultValue={todo.id}
                       className="form-control w-50"
                       onChange={(e) => setTodo({
                           ...todo, id: e.target.value
                       })}/>
                <hr/>

                <h4>Updating an Item in an Array</h4>
                <a href={`${API}/${todo.id}/title/${todo.title}`}
                   className="btn btn-primary float-end">
                    Update Todo</a>
                <input defaultValue={todo.id}
                       className="form-control w-25 float-start me-2"
                       onChange={(e) => setTodo({
                           ...todo, id: e.target.value
                       })}/>
                <input defaultValue={todo.title}
                       className="form-control w-50 float-start"
                       onChange={(e) => setTodo({
                           ...todo, title: e.target.value
                       })}/>
                <br/><br/>
                <hr/>
            </div>
            <div>
                <h4> Retrieving arrays </h4>
                <a className={"btn btn-primary"}
                   href={API}>
                    Get Todos
                </a>
                <hr/>
            </div>


            <h4>Retrieving an Item from an Array by ID</h4>
            <a className="btn btn-primary float-end"
               href={`${API}/${todo.id}`}>
                Get Todo by ID </a>
            <input defaultValue={todo.id} className="form-control w-50"
                   onChange={(e) => setTodo({...todo, id: e.target.value})}/>
            <hr/>

            <h4>Filtering Array Items</h4>
            <a className="btn btn-primary"
               href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <hr/>
        </div>
    )
}