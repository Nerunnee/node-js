const ageCheck = (age) => {
  if (age >= 18) {
    return "Насанд хүрсэн";
  }
  {
    return "Хүүхэд";
  }
};

module.exports = {
  ageCheck: ageCheck,
};
