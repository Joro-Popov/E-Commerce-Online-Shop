import React from "react";
import { connect } from "react-redux";

import {
  CheckoutItemContainer,
  ImageContainer,
  SpanContainer,
  QuantitySpan,
  ArrowContainer,
  ValueSpan,
  RemoveButtonContainer,
} from "./checkout-item.styles";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cart.actions";

function CheckoutItem({
  cartItem,
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
}) {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <SpanContainer>{name}</SpanContainer>
      <QuantitySpan>
        <ArrowContainer onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </ArrowContainer>
        <ValueSpan>{quantity}</ValueSpan>
        <ArrowContainer onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantitySpan>
      <SpanContainer>{price}</SpanContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}

const mapDispatchToProps = {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
