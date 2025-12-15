const { error } = require("console");
const fs = require("fs");

let data = "Сайн байна уу, Node.js!";

fs.writeFile("./message.txt", data, (error) => {
  if (error) {
    console.log("Aldaa garlaa");
  } else {
    console.log("File amjilttai uusgegdlee");
  }
});

data = "Өнөөдөр сайхан өдөр.";

fs.appendFile("./message.txt", data, (error) => {
  if (error) {
    console.log("Aldaa garlaa");
  } else {
    console.log("text amjilttai uusgegdlee");
  }
});

fs.readFile("./message.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data, "File read successfully!");
    console.log(data);
  }
});
