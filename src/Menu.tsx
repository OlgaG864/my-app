import React from "react";
import Card, { CardType } from "./Card/Card";
import "./Menu.css";

type displayMode = "grid" | "list";

interface MenuProps {
  defaultDisplay: displayMode;
}

interface MenuState {
  display: displayMode;
  cards: Array<CardType>;
}

class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);

    this.state = {
      display: props.defaultDisplay,
      cards: [
        {
          id: 1,
          name: "Fried Chicken",
          description: "fried chicken with chips",
          category: "Chicken",
          price: 15.99,
          rating: 5,
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/04/25/07/32/chicken-cutlet-1351331__340.jpg",
        },
        {
          id: 2,
          name: "Greek Salad",
          description: "salad with olives",
          category: "vegeterian",
          price: 10.55,
          rating: 5,
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273__340.jpg",
        },
        {
          id: 3,
          name: "Pad Tai",
          description: "very good",
          category: "asian",
          price: 22.85,
          rating: 5,
          imageUrl:
            "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542__340.jpg",
        },
      ],
    };
  }

  changeDisplay = (mode: displayMode) => {
    // 1) I was missing parenthesis
    // this.setState((state, props) => {
    //     display: mode
    // })

    // 2) this.props and this.state may be updated asynchronously - get use to this
    this.setState((state, props) => ({
      display: mode,
    }));

    // works in this case - no call to this.props and this.state
    // this.setState({
    //     ...this.state,
    //     display: mode
    // })
  };

  render() {
    return (
      <>
        <h1>Order Delivery or Takeaway</h1>

        <div className="d-flex">
          <button
            onClick={(e) => this.changeDisplay("list")}
            className="btn btn-default"
          >
            <i className="bi-list-ul"></i>
          </button>
          <button
            onClick={(e) => this.changeDisplay("grid")}
            className="btn btn-default"
          >
            <i className="bi-grid-3x3-gap-fill"></i>
          </button>
        </div>

        <div className={this.state.display}>
          {this.state.cards.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>
      </>
    );
  }
}

export default Menu;
