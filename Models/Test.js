const {model, Schema} = require("mongoose");

const Test = model(
  "Test",
  new Schema({
      column1: String,
      column2: Number,
      column3: Date,
  })
);

module.exports = Test;