import TodoItem from '@/components/TodoItem';

// const TodosList = (props) => {
//     return (
//       <ul>
//         {props.todosProps.map((todo) => (
//           <li>{todo.title}</li>
//         ))}
//       </ul>
//     );
//   };

// const TodosList = ({ todosProps, setTodos }) => {
//     return (
//         <ul>
//             {todosProps.map((todo) => (
//                 <TodoItem key = {todo.id} itemProp={todo} setTodos={setTodos}/>
//             ))}
//         </ul>
//     );
// };

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
    return (
        <ul>
            {todosProps.map((todo) => (
                <TodoItem key = {todo.id} itemProp={todo} handleChange={handleChange}
                delTodo = {delTodo} setUpdate={setUpdate}/>
            ))}
        </ul>
    );
};
export default TodosList;