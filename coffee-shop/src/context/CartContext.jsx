import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

// reducer: cart ko badalne ke saare qaide yahan hain
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find((item) => item.id === action.item.id);
      if (existing) {
        // item pehle se hai, to sirf quantity barhao
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // naya item hai, to quantity 1 ke saath add karo
      return [...state, { ...action.item, quantity: 1 }];
    }

    case "INCREASE":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case "DECREASE":
      return state
        .map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

// refresh karne par purana cart wapas lao
function getSavedCart() {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], getSavedCart);

  // cart badalte hi usay save kar do
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = {
    cart,
    totalItems,
    totalPrice,
    addItem: (item) => dispatch({ type: "ADD_ITEM", item }),
    increaseItem: (id) => dispatch({ type: "INCREASE", id }),
    decreaseItem: (id) => dispatch({ type: "DECREASE", id }),
    removeItem: (id) => dispatch({ type: "REMOVE", id }),
    clearCart: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// chhota shortcut: har jagah useContext(CartContext) na likhna paray
export function useCart() {
  return useContext(CartContext);
}