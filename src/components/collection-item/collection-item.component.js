import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import Button from "@material-ui/core/Button";
import { addItemToCart } from "../../redux/cart/cart.actions";

function CollectionItem({ item, addItemToCart }) {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="button"
        onClick={() => addItemToCart(item)}
      >
        ADD TO CART
      </Button>
    </div>
  );
}

const mapDispatchToProps = {
  addItemToCart,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
