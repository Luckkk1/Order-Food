import React from 'react';

const CartContext = React.createContext({
  cartList: [],
  totalAmount: 0,
  orderData: {},
  onAdd: (items) => {},
  onRemove: (id) => {},
  onReset: () => {},
  onGetOrderData: (orderData) => {},
});

export default CartContext;
