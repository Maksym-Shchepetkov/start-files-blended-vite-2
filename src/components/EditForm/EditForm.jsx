import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';

const EditForm = ({ currentTodo, onCancel, onUpdate }) => {
  const handleEditSubmit = e => {
    e.preventDefault();
    const value = e.target.text.value;
    onUpdate(value);
    e.target.reset();
  };
  return (
    <form onSubmit={handleEditSubmit} className={style.form}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button onClick={onCancel} className={style.editButton} type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
