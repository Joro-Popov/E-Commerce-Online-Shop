import React, { useState } from "react";
import SHOP_DATA from "../../MockedData/shopData";
import PreviewCollection from "../../components/preview-collection";

export default function ShopPage(props) {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps}/>
      ))}
    </div>
  );
}
