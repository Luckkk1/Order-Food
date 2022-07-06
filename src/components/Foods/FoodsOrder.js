import Card from '../UI/Card';
import FoodsList from './FoodsList';
import classes from './FoodsOrder.module.css';

const FoodsOrder = () => {
  return (
    <Card className={classes.order}>
      <FoodsList />
    </Card>
  );
};

export default FoodsOrder;
