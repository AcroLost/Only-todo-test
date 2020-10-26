const Header = ({ todos, setEditMode, editMode, showModal }) => {
  return (
    <div className="header">
      <p className="header__date">Сегодня</p>
      {todos.length
        ? editMode
          ? <p className="header__button" onClick={() => showModal ? null : setEditMode(false)}>Отменить</p>
          : <p className="header__button" onClick={() => showModal ? null : setEditMode(true)}>Править</p>
        : null}
    </div>
  );
}

export default Header;