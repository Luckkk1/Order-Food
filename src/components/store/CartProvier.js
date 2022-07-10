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
  if (action.type === 'ADD') {
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

  if (action.type === 'REMOVE') {
    const existingItemIndex = state.cartList.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.cartList[existingItemIndex];
    updatedAmount = state.totalAmount - existingItem.price;
    if (existingItem.amount === 1) {
      updatedList = state.cartList.filter((item) => item.id !== action.id);
    } else {
      updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      state.cartList[existingItemIndex] = updatedItem;
      updatedList = [...state.cartList];
    }
    return { cartList: updatedList, totalAmount: updatedAmount };
  }

  if (action.type === 'RESET') {
    return { cartList: [], totalAmount: 0 };
  }
  return defaultValue;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultValue);

  const addCartHandler = (item) => {
    dispatchCart({ type: 'ADD', item: item });
  };

  const removeCartHandler = (id) => {
    dispatchCart({ type: 'REMOVE', id: id });
  };

  const resetCartHandler = () => {
    dispatchCart({ type: 'RESET' });
  };

  const cartContext = {
    cartList: cartState.cartList,
    totalAmount: cartState.totalAmount,
    onAdd: addCartHandler,
    onRemove: removeCartHandler,
    onReset: resetCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
