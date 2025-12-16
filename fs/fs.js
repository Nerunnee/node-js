const fs = require("fs");
// Bodlog 1.

// console.log("1. Хүсэлт илгээхийг эхлүүлж байна");
// fs.writeFileSync("./task1.txt", "Hello Sync World!");
// console.log("2. Хүсэлт ажмжилттай илгээлээ");

// Bodlogo 2.

// console.log("readFileSync ажиллуулж байна...");
// const data = fs.readFileSync("./task1.txt", "utf-8");
// console.log("Үр дүн:", data, "Амжилттай уншлаа");

// Bodlogo 3.

// fs.appendFileSync("./task1.txt", "\nAdded by Sync");
// console.log("Амжилттай нэмэгдлээ");
// const data = fs.readFileSync("./task1.txt", "utf-8");
// console.log(data);

// Bodlogo 4.

// console.log("File ustgah gej baina");
// fs.unlinkSync("task1.txt");
// console.log("File amjilttai ustgagdlaa");

// Bodlog 5.

// console.log("Sync-g ehluulj baina");
// fs.writeFileSync("./task2.txt", "First line");
// console.log("Amjilttai bichigdlee");
// fs.appendFileSync("./task2.txt", "\nSecond line");
// console.log("Filed amjilttai nemlee");
// const data = fs.readFileSync("./task2.txt", "utf-8");
// console.log("Result:", data);
// console.log("Sync duuslaa");

// Bodlogo 6.

fs.writeFileSync("./task1.txt", "Sync Task1", (error) => {
  if (error) {
    console.log("aldaa garlaa", error);
  }
});

console.log("file amjilttai uuslee");

// Bodlog 7.

let data = fs.readFileSync("./task1.txt", "utf-8", (error) => {
  if (error) {
    console.log("aldaa garlaa");
  }
});

console.log(data);

// Bodlogo 8.

fs.appendFileSync("./task1.txt", "\nAdded from task 3", (error) => {
  if (error) {
    console.log("aldaa garlaa");
  }
});

data = fs.readFileSync("./task1.txt", "utf-8");

console.log(data);

// Bodlogo 9.

fs.unlinkSync("./no_file.txt", (error) => {
  if (error) {
    console.log("aldaa garlaa");
  }
});

console.log("file amjilttai ustlaa");

// Bodlogo 10.

console.log("start");

fs.writeFileSync("./task3.txt", "Task 3", (error) => {
  if (error) {
    console.log("aldaa garlaa");
  }
});

fs.appendFileSync("./task3.txt", "\nText nemlee", (error) => {
  if (error) {
    console.log("aldaa garlaa");
  }
});

data = fs.readFileSync("./task3.txt", "utf-8", (error) => {
  if (error) {
    console.log("aldaa garlaa");
  }
});

console.log("End:", data);
