let numbers = document.querySelectorAll(".counter-item-1");
numbers.forEach((number) => {
  number.innerHTML = "0";
  function changeNumbers() {
    let finalValue = +number.getAttribute("data-num");
    let value = +number.innerHTML;
    let increament = finalValue / 50;
    if (value < finalValue) {
      number.innerHTML = Math.round(value + increament);
      setTimeout(changeNumbers, 50);
    } else {
      number.innerHTML = finalValue;
    }
  }
  changeNumbers();
});
