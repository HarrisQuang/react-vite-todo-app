import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';
import { TodosProvider } from '@/context/TodosContext';

const TodosLogic = () => {
    // const [todos, setTodos] = useState([
    //   {
    //     id: uuidv4(),
    //     title: 'Setup development environment',
    //     completed: true,
    //   },
    //   {
    //     id: uuidv4(),
    //     title: 'Develop website and add content',
    //     completed: false,
    //   },
    //   {
    //     id: uuidv4(),
    //     title: 'Deploy to live server',
    //     completed: false,
    //   },
    // ]);
    

    // 1st way
    // return (
    //     <div>
    //         <InputTodo />
    //         <TodosList todosProps={todos} setTodos={setTodos}/>
    //     </div>
        
    // );
    return (
      <TodosProvider>
          <InputTodo />
          <TodosList />
      </TodosProvider>
      
    );
};

export default TodosLogic;