import React from 'react';
import './cart-item.styles.scss';

export default function CartItem({item}) {
    const {imageUrl, price, name, quantity} = item;

    return (
      <div className="cart-item">
        <img alt="cart item" src={imageUrl} />
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">{quantity} x ${price}</span>
        </div>
      </div>
    );
}