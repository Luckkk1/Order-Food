import { useReducer } from 'react';

import CartContext from './CartContext';

const defaultValue = {
  cartList: [],
  totalAmount: 0,
};

let updatedList;
let updatedItem;
let updatedAmount;

const cartReducer = (state, action) => {
  if ((action.type = 'ADD')) {
    const existingItemIndex = state.cartList.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItem = state.cartList[existingItemIndex];

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      state.cartList[existingItemIndex] = updatedItem;
      updatedList = [...state.cartList];
    } else {
      updatedList = state.cartList.concat(action.item);
    }
    updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    return { cartList: updatedList, totalAmount: updatedAmount };
  }
  return defaultValue;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultValue);

  const addCartHandler = (food) => {
    dispatchCart({ type: 'ADD', item: food });
  };

  const removeCartHandler = () => {};

  const cartContext = {
    cartList: cartState.cartList,
    totalAmount: cartState.totalAmount,
    onAdd: addCartHandler,
    onRemove: removeCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
