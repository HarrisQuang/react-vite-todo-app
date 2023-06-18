// const TodoItem = ({itemProp, setTodos}) => {
    
//     const handleChange = (id) => {
//         setTodos( (prevState) => 
//             prevState.map((todo) => {
//                 if (todo.id === id) {
//                     return {
//                         ...todo,
//                         completed: !todo.completed,
//                     };
//                 }
//                 return todo;
//             })
//         );
//     };

//     return  (
//         <li>
//             <input type="checkbox" 
//             checked = {itemProp.completed}
//             onChange={() => handleChange(itemProp.id)}/>
//             {itemProp.title}
//         </li>
//     );
// };

//This module is using the uncontrolled input

import styles from "@/styles/TodoItem.module.scss";
import { useState, useRef } from "react";

const TodoItem = ({itemProp, handleChange, delTodo, setUpdate}) => {
    const [editing, setEditing] = useState(false);
    const editInputRef = useRef(null);
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    }

    const handleEditing = () => {
        setEditing(true);
    };

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }

    const handleUpdatedDone = (event) => {
        if(event.key === 'Enter') {
            setUpdate(editInputRef.current.value, itemProp.id)
            setEditing(false)
        }
    };
    return  (
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
                <input type="checkbox" 
                checked = {itemProp.completed}
                onChange={() => handleChange(itemProp.id)}/>
                <button onClick={handleEditing}>Edit</button>
                <button onClick ={() => delTodo(itemProp.id)}>Delete</button>
                <span style = {itemProp.completed ? completedStyle : null}>
                    {itemProp.title}
                </span>
            </div>
            <input type="text" className={styles.textInput} ref = {editInputRef} defaultValue={itemProp.title}
            style={editMode} onKeyDown={handleUpdatedDone}/>
        </li>
    );
};

export default TodoItem;

//This module is using the uncontrolled input, solution of Hai

// import styles from "@/styles/TodoItem.module.scss";
// import { useState, useRef } from "react";

// const TodoItem = ({itemProp, handleChange, delTodo, setUpdate}) => {
//     const [editing, setEditing] = useState(false);
//     const completedStyle = {
//         fontStyle: 'italic',
//         color: '#595959',
//         opacity: 0.4,
//         textDecoration: 'line-through',
//     }

//     const handleEditing = () => {
//         setEditing(true);
//     };

//     let viewMode = {};
//     let editMode = {};

//     if (editing) {
//         viewMode.display = 'none';
//     } else {
//         editMode.display = 'none';
//     }

//     const handleUpdatedDone = (event) => {
//         if(event.key === 'Enter') {
//             setUpdate(event.target.value, itemProp.id)
//             setEditing(false)
//         }
//     };
//     return  (
//         <li className={styles.item}>
//             <div className={styles.content} style={viewMode}>
//                 <input type="checkbox" 
//                 checked = {itemProp.completed}
//                 onChange={() => handleChange(itemProp.id)}/>
//                 <button onClick={handleEditing}>Edit</button>
//                 <button onClick ={() => delTodo(itemProp.id)}>Delete</button>
//                 <span style = {itemProp.completed ? completedStyle : null}>
//                     {itemProp.title}
//                 </span>
//             </div>
//             <input type="text" className={styles.textInput} defaultValue={itemProp.title}
//             style={editMode} onKeyDown={handleUpdatedDone}/>
//         </li>
//     );
// };

// export default TodoItem;