import Text from '../Text/Text';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
const TodoListItem = ({ text, onDelete, index, changeText }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>
      <Text>{text.text}</Text>
      <button
        onClick={() => onDelete(text.id)}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button className={style.editButton}>
        <RiEdit2Line size={24} onClick={() => changeText(text)} />
      </button>
    </div>
  );
};

export default TodoListItem;
