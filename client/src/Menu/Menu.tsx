import React from "react";
import Card, { CardType } from "../Card/Card";
import "./Menu.css";

type displayMode = "grid" | "list";

interface MenuProps {
  defaultDisplay: displayMode;
}

interface MenuState {
  display: displayMode;
  cards: Array<CardType>;
  cardsDisplay: Array<CardType>;
  selectedCategory: string;
  categories: Array<string>;
}

class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);

    const cards = [
      {
        id: 1,
        name: "Fried Chicken",
        description: "fried chicken with chips",
        category: "chicken",
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
    ];

    this.state = {
      display: props.defaultDisplay,
      cards: cards,
      cardsDisplay: cards,
      selectedCategory: "all",
      categories: ["all", "chicken", "vegeterian", "asian"],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/cards/")
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => ({
          cards: json,
          cardsDisplay: json,
        }));
      });
  }
  changeDisplay = (mode: displayMode) => {
    this.setState((state, props) => ({
      display: mode,
    }));
  };

  categoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    // event.preventDefault();

    const cards = [...this.state.cards];
    const filtered = cards.filter((card) => {
      return card.category === selected;
    });

    this.setState((state, props) => ({
      cardsDisplay: selected === "all" ? cards : filtered,
      selectedCategory: selected,
    }));
  };

  render() {
    return (
      <>
        <h1 className="text-center m-3">Order Delivery or Takeaway</h1>

        <div className="d-flex justify-content-between px-5">
          <div className="d-flex align-items-center">
            <label className="pe-2">Category:</label>
            <select
              onChange={this.categoryChange}
              value={this.state.selectedCategory}
              className="form-select text-capitalize"
            >
              {this.state.categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
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
        </div>

        <div className={this.state.display}>
          {this.state.cardsDisplay.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </div>
      </>
    );
  }
}

export default Menu;
