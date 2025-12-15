const { add, subtract } = require("./math");

console.log("Bodlogo 1.", "Нэмсэн:", add(5, 6), "Хассан:", subtract(5, 6));

const { hello } = require("./greeting");

console.log("Bodlogo 2.", hello(), "Norovoo");

const { number } = require("./numberCheck");

console.log("Bodlogo 3.", number(5));

const { toUpper, textLength } = require("./textUtils");

console.log(
  "Bodlogo 4.",
  "Үсгийг том болгох:",
  toUpper("hello"),
  "Үгийн урт:",
  textLength("hello")
);

const { ageCheck } = require("./ageCheck");

console.log("Bodlogo 5.", ageCheck(5));
