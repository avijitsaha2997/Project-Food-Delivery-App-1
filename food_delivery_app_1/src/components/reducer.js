export const initialState = {
    cart: null,
    total: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CART":
            return {
                ...state,
                cart: action.cart
            };

        case "SET_TOTAL":
            return {
                ...state,
                total: action.total
            };

        default:
            return state;
    }
};

export default reducer;
