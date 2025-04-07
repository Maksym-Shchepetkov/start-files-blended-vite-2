import TodoListItem from '../TodoListItem/TodoListItem';
import GridItem from '../GridItem/GridItem';
import css from './Grid.module.css';
const Grid = ({ children, arrey, onDelete, changeText }) => {
  return (
    <ul className={css.list}>
      {arrey.map((item, index) => {
        return (
          <GridItem key={index}>
            <TodoListItem
              text={item}
              onDelete={onDelete}
              index={index}
              changeText={changeText}
            />
          </GridItem>
        );
      })}
      {children}
    </ul>
  );
};

export default Grid;
