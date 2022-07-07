import { useContext } from 'react';

import CartContext from '../../store/CartContext';
import FoodsForm from './FoodsForm';
import classes from './FoodsItem.module.css';

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    const foodData = {
      name: props.name,
      price: props.price,
      amount: +amount,
      id: props.id,
    };

    cartCtx.onAdd(foodData);
  };

  return (
    <li className={classes.item}>
      <div className={classes.information}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
      <div>
        <FoodsForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FoodItem;
