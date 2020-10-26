import { useEffect, useState } from "react";

export const Modal = ({ setShowModal, addTodo, editMode, todoModal, updateTodo }) => {

  const [todoValue, setTodoValue] = useState(''),
    [textNewTodo, setTextNewTodo] = useState('');

  useEffect(() => {
    if (todoModal.label) {
      setTodoValue(todoModal.label);
    }
  }, [todoModal])

  const saveTodo = () => {
    if (todoValue.length === 0) {
      return alert('Дело не может быть пустым')
    }
    updateTodo(todoModal.id, todoValue);
    setShowModal(false);
  }

  const addNewTodo = () => {
    if (textNewTodo.length === 0) {
      return alert('Дело не может быть пустым')
    }
    addTodo(textNewTodo);
    setTextNewTodo('');
    setShowModal(false);
  }

  const closeModal = () => {
    setShowModal(false);
    setTextNewTodo('');
  }

  return (
    <div className="modal">

      {editMode
        ? <input type="text" value={todoValue} onChange={(event) => setTodoValue(event.target.value)} />
        : <textarea placeholder="Введите текст задачи" value={textNewTodo} onChange={(event) => setTextNewTodo(event.target.value)} />
      }

      <div className="modal__wrapper">
        <p className="modal__button" onClick={closeModal}>Закрыть</p>
        {editMode
          ? <p className="modal__button modal__button_success" onClick={saveTodo}>Сохранить</p>
          : <p className="modal__button modal__button_success" onClick={addNewTodo}>Добавить</p>
        }
      </div>
    </div>
  );
}