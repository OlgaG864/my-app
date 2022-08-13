import React from "react";
import "./Card.css";

interface Props {
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
}

// function Card(props: Props) {
class Card extends React.Component<Props> {
  render() {
    return (
      <div className="card">
        <img
          src={this.props.imageUrl}
          alt={this.props.name}
          className="card-img-top"
        />
        <div>{this.props.category}</div>
        <div className="card-body">
          <div className="card-title">{this.props.name}</div>
          <div className="card-text">{this.props.description}</div>
          <div>{this.props.price}</div>
          <div>
            Rating: {this.props.rating}
            <i className="bi-star"></i>
          </div>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    );
  }
}

export default Card;
