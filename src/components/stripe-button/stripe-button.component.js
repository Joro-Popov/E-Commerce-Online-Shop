import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JQXTqJj4et3AqA1d5yQz4AljsRQJlfWbvlX10O2Z8QIA2LTZtvOgX2XEbUVIN6q2IJVmUdBjte2pDFrHLl6UVwg00P80smckr";

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful!')
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
