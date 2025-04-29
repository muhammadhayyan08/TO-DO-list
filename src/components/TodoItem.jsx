import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
    </div>
  );
}
