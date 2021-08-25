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
  clearItemFromCartStart,
  addItemToCartSuccess,
  removeItemFromCartSuccess,
} from "../../redux/cart/cart.actions";

function CheckoutItem({
  cartItem,
  clearItemFromCartStart,
  addItemToCartSuccess,
  removeItemFromCartSuccess,
}) {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <SpanContainer>{name}</SpanContainer>
      <QuantitySpan>
        <ArrowContainer onClick={() => removeItemFromCartSuccess(cartItem)}>
          &#10094;
        </ArrowContainer>
        <ValueSpan>{quantity}</ValueSpan>
        <ArrowContainer onClick={() => addItemToCartSuccess(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantitySpan>
      <SpanContainer>{price}</SpanContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCartStart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCartSuccess: (item) => dispatch(addItemToCartSuccess(item)),
  clearItemFromCartStart: (item) => dispatch(clearItemFromCartStart(item)),
  removeItemFromCartSuccess: (item) => dispatch(removeItemFromCartSuccess(item)),
});


export default connect(null, mapDispatchToProps)(CheckoutItem);
