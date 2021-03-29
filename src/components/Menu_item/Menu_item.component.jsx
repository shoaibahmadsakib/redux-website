import React from "react";
import "../Menu_item/Menu_Item.style.scss";
const MenuItem = ({ title, image, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">buy here</span>
      </div>
    </div>
  );
};
export default MenuItem;
