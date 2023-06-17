import Header from '@/components/Header';
import TodosLogic from './TodosLogic';
import Navbar from './Navbar';
import Modal from './Modal';
import Form from './Form';

const TodoApp = () => {
    return (
        <div className='wrapper'>
            <div className='todos'>
                {/* <Navbar />
                <Modal />
                <Form /> */}
                <Header />
                <TodosLogic />
            </div>
        </div>
    );
};
export default TodoApp;