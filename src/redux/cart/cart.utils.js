
export const addItemToCart = (cartItems, item) => {
  const existingCardItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCardItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
            ...cartItem,
            quantity: cartItem.quantity + 1
        }
      }
      return cartItem;
    });
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, item) => {
  const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);

  return updatedCartItems;
}

export const removeItemFromCart = (cartItems, item) => {
  const existingCardItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCardItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }

  return cartItems.map(cartItem => {
    if (cartItem.id === item.id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      };
    }
    return cartItem;
  })
}