import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item";

export default function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps}/>
          ))}
      </div>
    </div>
  );
}
