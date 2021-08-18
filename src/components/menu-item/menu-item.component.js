import React from "react";
import "./menu-item-styles.scss";

export default function MenuItem({ title, subtitle, imageUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'/>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}
