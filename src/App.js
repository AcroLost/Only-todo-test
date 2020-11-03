import Header from './components/Header';
import Todo from './components/Todo';
import Modal from './components/Modal';
import { useEffect, useState } from 'react';

const App = ({ todos }) => {

  const [showModal, setShowModal] = useState(false),
    [editMode, setEditMode] = useState(false),
    [todoModal, setTodoModal] = useState('');

  useEffect(() => {
    if (!todos.length) {
      setEditMode(false)
    }
  }, [todos])

  const todosList = todos.map((todo) => {
    return (
      <Todo key={todo.id} todo={todo} editMode={editMode}
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
        <Modal setShowModal={setShowModal} editMode={editMode} todoModal={todoModal} />
      }

      {!editMode && !showModal &&
        <svg className="add" onClick={() => setShowModal(true)} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 11C0 10.4477 0.447715 10 1 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H1C0.447715 12 0 11.5523 0 11Z" fill="#23A3FF" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11 22C10.4477 22 10 21.5523 10 21L10 1C10 0.447716 10.4477 2.41411e-08 11 0C11.5523 -2.41411e-08 12 0.447716 12 1L12 21C12 21.5523 11.5523 22 11 22Z" fill="#23A3FF" />
        </svg>
      }
    </>
  );
}

export default App;