import React from "react";

export default function Card(props) {
  const { image, title, content, customClass } = props;
  return (
    <div className={`card__box ${customClass}`}>
      <div className="card__icon-box">
        <img src={image} className="card__icon" alt="icon" />
      </div>
      <h3 className="card__title">{title}</h3>

      <p className="card__content">{content}</p>
    </div>
  );
}
