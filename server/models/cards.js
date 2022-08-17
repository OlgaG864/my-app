const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema({
  name: {
    type: string,
    require: true,
  },
  description: {
    type: string,
    require: true,
  },
  category: {
    type: string,
    require: true,
  },
  price: {
    type: decimal,
    require: true,
  },
  rating: {
    type: int32,
    require: true,
  },

  imageUrl: {
    type: string,
    require: true,
  },
});
