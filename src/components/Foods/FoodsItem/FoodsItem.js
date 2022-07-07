import FoodsForm from './FoodsForm';
import classes from './FoodsItem.module.css';

const FoodItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.information}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
      <div>
        <FoodsForm />
      </div>
    </li>
  );
};

export default FoodItem;
