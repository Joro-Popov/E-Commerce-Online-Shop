import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  ButtonContainer,
} from "./collection-item.styles";

function CollectionItem({ item, addItemToCart }) {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer>
        <NameContainer className="name">{name}</NameContainer>
        <PriceContainer className="price">${price}</PriceContainer>
      </CollectionFooterContainer>
      <ButtonContainer
        type="submit"
        fullWidth
        variant="contained"
        className="button"
        onClick={() => addItemToCart(item)}
      >
        ADD TO CART
      </ButtonContainer>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = {
  addItemToCart,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
