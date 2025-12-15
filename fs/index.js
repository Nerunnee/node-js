const fs = require("fs");

// let data = "Сайн байна уу, Node.js!";

// fs.writeFile("./message.txt", data, (error) => {
//   if (error) {
//     console.log("Aldaa garlaa");
//   } else {
//     console.log("File amjilttai uusgegdlee");
//   }
// });

// fs.readFile("./message.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(data, "File read successfully!");
//     console.log(data);
//   }
// });

// data = "Өнөөдөр сайхан өдөр.";

// fs.appendFile("./message.txt", data, (error) => {
//   if (error) {
//     console.log("Aldaa garlaa");
//   } else {
//     console.log("text amjilttai uusgegdlee");
//   }
// });

// fs.unlink("./message.txt", (error) => {
//   if (error) {
//     console.log("aldaa garlaa");
//   } else {
//     console.log("File amjilttai ustgagdlaa.");
//   }
// });

fs.mkdir("./data", (error) => {
  if (error) {
    console.log("aldaa garlaa");
  } else {
    console.log("Folder amjilttai uusgelee.");
  }
});

const data = "Ene bol ugugdul";

fs.writeFile("./data/info.txt", data, (error) => {
  if (error) {
    console.log("aldaa garlaa");
  } else {
    console.log("File amjilttai uusgelee.");
  }
});
