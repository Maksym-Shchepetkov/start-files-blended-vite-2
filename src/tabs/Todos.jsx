import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todo, setTodo] = useState(() => {
    const openTodos = JSON.parse(localStorage.getItem('savedTodos'));
    return openTodos?.length ? openTodos : [];
  });
  const [isEditing, setIsEditing] = useState(true);
  const [currentTodo, setCurrentTodo] = useState({});

  const addNewTodo = newTodo => {
    const addValue = { id: nanoid(), text: newTodo };

    setTodo(prevTodo => {
      return [...prevTodo, addValue];
    });
  };

  const handleDeleteTodo = todoId => {
    setTodo(prevTodo => {
      return prevTodo.filter(todo => todo.id !== todoId);
    });
  };

  const handleOnEditClick = todoItem => {
    setIsEditing(false);
    setCurrentTodo(todoItem);
  };

  const handleCancelEdit = () => {
    setIsEditing(true);
    setCurrentTodo({});
  };

  const handleEditTodo = newText => {
    setIsEditing(true);
    setCurrentTodo({});

    const updateTodo = {
      ...currentTodo,
      text: newText,
    };

    const index = todo.findIndex(item => item.id === updateTodo.id);

    setTodo(todo.toSpliced(index, 1, updateTodo));
  };

  useEffect(() => {
    localStorage.setItem('savedTodos', JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      {isEditing ? (
        <Form onAdd={addNewTodo} />
      ) : (
        <EditForm
          currentTodo={currentTodo}
          onCancel={handleCancelEdit}
          onUpdate={handleEditTodo}
        />
      )}

      <TodoList
        arrey={todo}
        onDelete={handleDeleteTodo}
        changeText={handleOnEditClick}
      />
    </>
  );
};

export default Todos;
