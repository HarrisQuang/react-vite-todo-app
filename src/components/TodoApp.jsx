import Header from '@/components/Header';
import TodosLogic from './TodosLogic';
import Navbar from './Navbar';
import Modal from './Modal';

const TodoApp = () => {
    return (
        <>
            <Navbar />
            <Modal />
            {/* <Header />
            <TodosLogic /> */}
        </>
    );
};
export default TodoApp;