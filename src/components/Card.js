import React, { Component } from "react";

class Card extends Component {
  render() {
		const {img, title, info, price, off} = this.props;
    return (
      <div className="card">
        <div className="card__body">
          <img
            src={img}
            alt="Pepsi"
          />
          <h2>{title}</h2>
          <p>{info}</p>
          <h1>$ {price}</h1>
          <button className="card__btn">VIEW PRODUCT</button>
          <span className="card__price-off"> - % {off}</span>
        </div>
      </div>
    );
  }
}

export default Card;
