import TodoItem from '@/components/TodoItem';
import { useTodosContext } from '@/context/TodosContext';

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

const TodosList = () => {
    const {todos} = useTodosContext();
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key = {todo.id} itemProp={todo}/>
            ))}
        </ul>
    );
};
export default TodosList;