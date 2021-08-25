import React from "react";
import { connect } from "react-redux";
import { addItemToCartStart } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  ButtonContainer,
} from "./collection-item.styles";

function CollectionItem({ item, addItemToCartStart }) {
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
        onClick={() => addItemToCartStart(item)}
      >
        ADD TO CART
      </ButtonContainer>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCartStart: (item) => dispatch(addItemToCartStart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
