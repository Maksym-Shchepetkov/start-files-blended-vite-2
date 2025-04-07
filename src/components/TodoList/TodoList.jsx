import Grid from '../Grid/Grid';

const TodoList = ({ arrey, onDelete, changeText }) => {
  return (
    <>
      <h3>TodoList</h3>
      <Grid arrey={arrey} onDelete={onDelete} changeText={changeText} />
    </>
  );
};

export default TodoList;
