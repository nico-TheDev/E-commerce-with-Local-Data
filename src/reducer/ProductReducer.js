export default function ProductReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_CART":
            const modAllProducts = state.allProducts.map((item) => {
                if (item.id === action.id) {
                    const modItem = { ...item, inCart: !item.inCart };

                    return modItem;
                } else {
                    return item;
                }
            });

            const cartList = modAllProducts.filter((item) => {
                if (item.inCart) return item;
            });

            return {
                allProducts: modAllProducts,
                inCart: cartList,
            };

        case "ADD_COUNT":
            return {
                ...state,
                inCart: state.inCart.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            count: item.count + 1,
                            total: (item.count + 1) * item.price,
                        };
                    } else {
                        return item;
                    }
                }),
            };

        case "SUBTRACT_COUNT":
            return {
                ...state,
                inCart: state.inCart.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            count: item.count - 1,
                            total: (item.count - 1) * item.price,
                        };
                    } else {
                        return item;
                    }
                }),
            };

        case "COMPUTE_TOTAL":
            return {
                ...state,
                total: state.inCart.reduce((total, item) => {
                    total += item.total;
                    return total;
                }, 0),
            };
        default:
            return state;
    }
}
