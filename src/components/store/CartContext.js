import React from 'react';

const CartContext = React.createContext({
  cartList: [],
  totalAmount: 0,
  onAdd: (items) => {},
  onRemove: (id) => {},
  onReset: () => {},
});

export default CartContext;
