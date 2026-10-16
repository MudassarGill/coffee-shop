import { Link, useLocation } from "react-router";
import { CircleCheck } from "lucide-react";

function OrderSuccess() {
  const { state } = useLocation();

  // agar koi seedha URL khol de to order ka data nahi hoga
  if (!state) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="mb-3 font-heading text-4xl font-bold">No recent order</h1>
        <p className="mb-8 text-lg">Place an order to see your confirmation here.</p>
        <Link
          to="/menu"
          className="inline-block rounded-full bg-espresso px-8 py-4 font-bold text-cream hover:bg-roast"
        >
          Browse Menu
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <CircleCheck size={72} className="mx-auto mb-6 text-roast" />
      <h1 className="mb-3 font-heading text-4xl font-bold">Thank you, {state.name}!</h1>
      <p className="mb-8 text-lg">Your order has been placed.</p>

      <div className="mb-10 rounded-3xl bg-latte p-6 text-left">
        <div className="mb-2 flex justify-between">
          <span>Order number</span>
          <span className="font-bold">{state.orderId}</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>Payment</span>
          <span className="font-bold">
            {state.paymentMethod === "card" ? "Card" : "Cash on Delivery"}
          </span>
        </div>
        <div className="flex justify-between border-t border-espresso/20 pt-3 text-xl">
          <span>Total</span>
          <span className="font-bold">Rs. {state.total}</span>
        </div>
      </div>

      <Link
        to="/"
        className="inline-block rounded-full bg-espresso px-8 py-4 font-bold text-cream hover:bg-roast"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default OrderSuccess;