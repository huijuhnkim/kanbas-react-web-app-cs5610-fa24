import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <>
            <h3>Todu List</h3>
            <ul className="list-group">
                { todos.map(todo => {
                    return(<TodoItem todo={todo}/>);
                })}
            </ul><hr/>
        </>
    );
}
export default TodoList;