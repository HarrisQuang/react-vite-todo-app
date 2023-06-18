import {
    useState,
    useEffect,
    createContext,
    useContext,
  } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodosContext = createContext(null);

export const TodosProvider = ({children}) => {
    const [todos, setTodos] = useState(getInitialTodos());

    const handleChange = (id) => {
      setTodos( (prevState) => 
          prevState.map((todo) => {
              if (todo.id === id) {
                  return {
                      ...todo,
                      completed: !todo.completed,
                  };
              }
              return todo;
          })
      );
    };

    const delTodo = (id) => {
      console.log('deleted', id);
      setTodos([
        ...todos.filter((todo) => {
            return todo.id !== id;
        }),
      ]);
    }

    const addTodoItem = (title) => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    const setUpdate = (updatedTitle, id) => {
      setTodos( (prevState) => 
          prevState.map((todo) => {
              if (todo.id === id) {
                todo.title = updatedTitle;
              }
              console.log(todo)
              return todo;
          })
      );
    };

    function getInitialTodos() {
      const temp = localStorage.getItem('todos');
      const savedTodos = JSON.parse(temp);
      return savedTodos || [];
    }

    /*
    We imported the React useEffect Hook in the code and placed the side effects inside it. 
    The useEffect Hook takes a function as an argument and an optional array of dependencies that define when to re-run the effect.
    Naturally, the effect runs after every completed render. 
    That is, on the first component render and after it detects a state or prop changes in the dependency array. 
    If we leave the dependency array empty, React will skip any form of re-rendering and only execute the effects once.
    */
    useEffect(() => {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp); 
    }, [todos]);

    return (
        <TodosContext.Provider 
            value={{todos,
            handleChange,
            delTodo,
            addTodoItem,
            setUpdate}}>
                {children}
        </TodosContext.Provider>
    )
};

export const useTodosContext = () => useContext(TodosContext) ;