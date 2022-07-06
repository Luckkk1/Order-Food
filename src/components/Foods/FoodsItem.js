import FoodsForm from './FoodsForm';
import classes from './FoodsItem.module.css';

const FoodItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.information}>
        <h2>name</h2>
        <p>description</p>
        <p>price</p>
      </div>
      <div>
        <FoodsForm />
      </div>
    </li>
  );
};

export default FoodItem;
