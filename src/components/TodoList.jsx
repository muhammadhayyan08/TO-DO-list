import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { removeAllTodos } from '../redux/actions';

export default function TodoList() {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(removeAllTodos());
  };

  if (todos.length === 0) {
    return <p className="empty">Nothing here... Add something!</p>;
  }

  return (
    <div className="todo-list">
      <button className="remove-all" onClick={handleRemoveAll}>Remove All</button>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
