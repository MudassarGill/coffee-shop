import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, totalItems, totalPrice, clearCart } = useCart();

  // cart khali ho to
  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <ShoppingBag size={64} className="mx-auto mb-6 text-roast" />
        <h1 className="mb-3 font-heading text-4xl font-bold">Your cart is empty</h1>
        <p className="mb-8 text-lg">Looks like you have not added anything yet.</p>
        <Link
          to="/menu"
          className="inline-block rounded-full bg-espresso px-8 py-4 font-bold text-cream hover:bg-roast"
        >
          Browse Menu
        </Link>
      </section>
    );
  }

  // cart mein items hon to
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-10 font-heading text-4xl font-bold">Your Cart</h1>

      <div className="flex flex-col gap-10 lg:flex-row">

        {/* left: items ki list */}
        <div className="flex flex-1 flex-col gap-5">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <button
            onClick={clearCart}
            className="cursor-pointer self-start text-sm font-medium text-roast underline hover:text-red-600"
          >
            Clear cart
          </button>
        </div>

        {/* right: order summary */}
        <aside className="h-fit rounded-3xl bg-latte p-6 lg:w-80">
          <h2 className="mb-4 font-heading text-2xl font-bold">Order Summary</h2>

          <div className="mb-2 flex justify-between">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="mb-6 flex justify-between border-t border-espresso/20 pt-4 text-xl font-bold">
            <span>Total</span>
            <span>Rs. {totalPrice}</span>
          </div>

          <Link
            to="/checkout"
            className="block rounded-full bg-espresso px-6 py-4 text-center font-bold text-cream hover:bg-roast"
          >
            Proceed to Checkout
          </Link>
          <Link
            to="/menu"
            className="mt-3 block text-center text-sm font-medium underline hover:text-roast"
          >
            Continue Shopping
          </Link>
        </aside>

      </div>
    </section>
  );
}

export default Cart;