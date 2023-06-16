import Header from '@/components/Header';
import TodosLogic from './TodosLogic';
import Navbar from './Navbar';
import Modal from './Modal';
import Form from './Form';

const TodoApp = () => {
    return (
        <>
            {/* <Navbar />
            <Modal />
            <Form /> */}
            <Header />
            <TodosLogic />
        </>
    );
};
export default TodoApp;