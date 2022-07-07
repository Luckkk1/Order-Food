import Card from '../UI/Card';
import FoodsList from './FoodsList';
import classes from './FoodsOrder.module.css';

const FoodsOrder = () => {
  return (
    <section className={classes.section}>
      <Card className={classes.order}>
        <FoodsList />
      </Card>
    </section>
  );
};

export default FoodsOrder;
