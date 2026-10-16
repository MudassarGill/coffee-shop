import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Lock } from "lucide-react";
import { useCart } from "../context/CartContext";
import FormField from "../components/FormField";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

const DELIVERY_FEE = 150; // sample, apni marzi ka rakh lo

// card number ko 4-4 digits mein todna: 1234 5678 9012 3456
function formatCardNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

// expiry ko MM/YY banana
function formatExpiry(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  return digits.length >= 3 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
}

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [errors, setErrors] = useState({});

  const grandTotal = totalPrice + DELIVERY_FEE;

  // hooks upar khatam, ab cart khali ho to yeh page dikhao
  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="mb-3 font-heading text-4xl font-bold">Nothing to checkout</h1>
        <p className="mb-8 text-lg">Your cart is empty.</p>
        <Link
          to="/menu"
          className="inline-block rounded-full bg-espresso px-8 py-4 font-bold text-cream hover:bg-roast"
        >
          Browse Menu
        </Link>
      </section>
    );
  }

  // har input ke liye ek hi function
  function handleChange(e) {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "cardNumber") newValue = formatCardNumber(value);
    if (name === "expiry") newValue = formatExpiry(value);
    if (name === "cvv") newValue = value.replace(/\D/g, "").slice(0, 4);

    setForm((prev) => ({ ...prev, [name]: newValue }));

    // user ne likhna shuru kiya to us field ka error hata do
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  // sab fields check karo, ghalat fields ke message wapas do
  function validate() {
    const newErrors = {};

    if (form.fullName.trim().length < 3) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!/^[0-9+\s-]{10,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }
    if (form.address.trim().length < 8) {
      newErrors.address = "Please enter your full address.";
    }
    if (form.city.trim().length < 2) {
      newErrors.city = "Please enter your city.";
    }

    // card ke fields sirf tab check hon jab card chuna ho
    if (paymentMethod === "card") {
      if (form.cardNumber.replace(/\s/g, "").length !== 16) {
        newErrors.cardNumber = "Card number must be 16 digits.";
      }

      const match = /^(0[1-9]|1[0-2])\/(\d{2})$/.exec(form.expiry);
      if (!match) {
        newErrors.expiry = "Use the format MM/YY.";
      } else {
        const month = Number(match[1]);
        const year = 2000 + Number(match[2]);
        const now = new Date();
        const expired =
          year < now.getFullYear() ||
          (year === now.getFullYear() && month < now.getMonth() + 1);
        if (expired) newErrors.expiry = "This card has expired.";
      }

      if (!/^\d{3,4}$/.test(form.cvv)) {
        newErrors.cvv = "Enter the 3 or 4 digit code.";
      }
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    // agar koi bhi error hai to yahin ruk jao
    if (Object.keys(newErrors).length > 0) return;

    // card ki detail order mein shamil NAHI ho rahi
    const order = {
      orderId: "EMB-" + Math.floor(100000 + Math.random() * 900000),
      name: form.fullName,
      total: grandTotal,
      paymentMethod,
    };

    clearCart();
    navigate("/order-success", { state: order });
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-10 font-heading text-4xl font-bold">Checkout</h1>

      <div className="flex flex-col gap-10 lg:flex-row">

        {/* left: form */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-1 flex-col gap-10">

          {/* delivery details */}
          <div>
            <h2 className="mb-5 font-heading text-2xl font-bold">Delivery Details</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                label="Full name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                error={errors.fullName}
                autoComplete="name"
              />
              <FormField
                label="Phone"
                name="phone"
                type="tel"
                inputMode="tel"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                autoComplete="tel"
                placeholder="03xx xxxxxxx"
              />
              <div className="sm:col-span-2">
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />
              </div>
              <div className="sm:col-span-2">
                <FormField
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  error={errors.address}
                  autoComplete="street-address"
                />
              </div>
              <FormField
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
                error={errors.city}
                autoComplete="address-level2"
              />
            </div>
          </div>

          {/* payment */}
          <div>
            <h2 className="mb-5 font-heading text-2xl font-bold">Payment</h2>

            <div className="mb-6 flex flex-wrap gap-4">
              <label className="flex cursor-pointer items-center gap-2 font-medium">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Card
              </label>
              <label className="flex cursor-pointer items-center gap-2 font-medium">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
            </div>

            {paymentMethod === "card" && (
              <div className="rounded-3xl bg-latte p-6">
                <p className="mb-5 flex items-center gap-2 text-sm">
                  <Lock size={16} />
                  Demo only. Card details are not saved or sent anywhere.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <FormField
                      label="Card number"
                      name="cardNumber"
                      inputMode="numeric"
                      value={form.cardNumber}
                      onChange={handleChange}
                      error={errors.cardNumber}
                      autoComplete="cc-number"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <FormField
                    label="Expiry (MM/YY)"
                    name="expiry"
                    inputMode="numeric"
                    value={form.expiry}
                    onChange={handleChange}
                    error={errors.expiry}
                    autoComplete="cc-exp"
                    placeholder="08/28"
                  />
                  <FormField
                    label="CVV"
                    name="cvv"
                    type="password"
                    inputMode="numeric"
                    value={form.cvv}
                    onChange={handleChange}
                    error={errors.cvv}
                    autoComplete="cc-csc"
                    placeholder="123"
                  />
                </div>
              </div>
            )}

            {paymentMethod === "cod" && (
              <p className="rounded-3xl bg-latte p-6">
                You will pay in cash when your order arrives.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-full bg-espresso px-8 py-4 text-lg font-bold text-cream hover:bg-roast"
          >
            Place Order (Rs. {grandTotal})
          </button>
        </form>

        {/* right: order summary */}
        <aside className="h-fit rounded-3xl bg-latte p-6 lg:w-80">
          <h2 className="mb-4 font-heading text-2xl font-bold">Your Order</h2>

          <ul className="mb-4 flex flex-col gap-3">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between gap-3 text-sm">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span className="font-medium">Rs. {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <div className="mb-2 flex justify-between border-t border-espresso/20 pt-4">
            <span>Subtotal</span>
            <span>Rs. {totalPrice}</span>
          </div>
          <div className="mb-4 flex justify-between">
            <span>Delivery</span>
            <span>Rs. {DELIVERY_FEE}</span>
          </div>
          <div className="flex justify-between border-t border-espresso/20 pt-4 text-xl font-bold">
            <span>Total</span>
            <span>Rs. {grandTotal}</span>
          </div>
        </aside>

      </div>
    </section>
  );
}

export default Checkout;