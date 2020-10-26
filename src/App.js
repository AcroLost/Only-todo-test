import Header from './components/Header';
import Todo from './components/Todo';
import { Modal } from './components/Modal';
import { useState } from 'react';
import plus from './images/plus.png';


const App = ({ todos, addTodo, removeTodo, checkTodo, updateTodo }) => {

  const [showModal, setShowModal] = useState(false),
    [editMode, setEditMode] = useState(false),
    [todoModal, setTodoModal] = useState('');

  const todosList = todos.map((todo) => {
    return (
      <Todo key={todo.id} todo={todo} editMode={editMode}
        removeTodo={removeTodo} checkTodo={checkTodo}
        setTodoModal={setTodoModal} setShowModal={setShowModal}
      />
    );
  })

  return (
    <>

      <Header todos={todos} setEditMode={setEditMode}
        editMode={editMode} showModal={showModal}
      />

      <div className="main">
        {!todos.length && <p className="main__empty">Список задач пуст</p>}

        <div>
          {todosList}
        </div>
      </div>

      {showModal &&
        <Modal setShowModal={setShowModal} addTodo={addTodo}
          editMode={editMode} todoModal={todoModal}
          updateTodo={updateTodo}
        />
      }

      {!editMode && !showModal &&
        <img className="add" src={plus} alt="add" onClick={() => setShowModal(true)} />
      }
    </>
  );
}

export default App;