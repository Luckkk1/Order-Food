import classes from './Foods.module.css';
import FoodsOrder from './FoodsOrder';
import FoodsSummary from './FoodsSummary';

const Foods = () => {
  return (
    <main className={classes.foods}>
      <FoodsSummary />
      <FoodsOrder />
    </main>
  );
};

export default Foods;
