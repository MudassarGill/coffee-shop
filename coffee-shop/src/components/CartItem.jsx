import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { increaseItem, decreaseItem, removeItem } = useCart();

  return (
    <article className="flex gap-4 rounded-3xl bg-cream p-4 shadow-lg shadow-espresso/20">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 rounded-2xl object-cover sm:h-28 sm:w-28"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg font-bold">{item.name}</h3>
            <p className="text-sm text-roast">Rs. {item.price} each</p>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            aria-label={`Remove ${item.name}`}
            className="cursor-pointer text-espresso/60 hover:text-red-600"
          >
            <Trash2 size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          {/* quantity buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseItem(item.id)}
              aria-label="Decrease quantity"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-latte hover:bg-orange"
            >
              <Minus size={16} />
            </button>
            <span className="w-6 text-center font-bold">{item.quantity}</span>
            <button
              onClick={() => increaseItem(item.id)}
              aria-label="Increase quantity"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-latte hover:bg-orange"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* is item ka total */}
          <p className="text-lg font-bold text-roast">
            Rs. {item.price * item.quantity}
          </p>
        </div>
      </div>
    </article>
  );
}

export default CartItem;