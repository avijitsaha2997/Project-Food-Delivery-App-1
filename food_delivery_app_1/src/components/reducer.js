/* eslint-disable no-case-declarations */
/* eslint-disable comma-dangle */
export const initialState = {
  cart: [],
};

export const calculateTotalPrice = (cartItems) => {
  // Calculate the total price of items in the cart
  return cartItems?.reduce(
    (accumulator, item) => accumulator + parseFloat(item.price) * item.quantity,
    0
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const index = state.cart.findIndex(
        (item) => item.itemId === action.item.itemId
      );

      if (index === -1) {
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      } else {
        return state;
      }
    case "add":
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.id) {
          // Update the quantity of the item based on the action type
          const newQuantity1 = item.quantity + 1;
          return {
            ...item,
            quantity: newQuantity1,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    // case "remove":
    //   const updatedCart2 = state.cart.map((item) => {
    //     if (item.id === action.id) {
    //       // Update the quantity of the item based on the action type
    //       const newQuantity = item.quantity - 1;
    //       return {
    //         ...item,
    //         quantity: newQuantity,
    //       };
    //     }
    //     return item;
    //   });
    //   return {
    //     ...state,
    //     cart: updatedCart2,
    //   };

    case "remove":
      const updatedCart2 = state.cart
        .map((item) => {
          if (item.id === action.id) {
            // Update the quantity of the item based on the action type
            const newQuantity = item.quantity - 1;
            if (newQuantity < 1) {
              // Remove the item from the cart if the quantity becomes less than 1
              return null;
            }
            return {
              ...item,
              quantity: newQuantity,
            };
          }
          return item;
        })
        .filter((item) => item !== null); // Filter out the null values from the updated cart
      return {
        ...state,
        cart: updatedCart2,
      };

    default:
      return state;
  }
};

export default reducer;
