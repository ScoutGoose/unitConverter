let length = document.querySelector("#length");
let mass = document.querySelector("#mass");
let volume = document.querySelector("#volume");
let unitNum = document.querySelector("#unit-num");
document.querySelector("button").addEventListener("click", () => {
  let val = unitNum.value;
  if (val <= 0 || !val) {
    val = 0;
  }
  length.textContent = `${val} meters = ${(val * 3.28084).toFixed(
    3
  )} feet | ${val} feet = ${val * 0.3048} meters`;

  volume.textContent = `${val} liters = ${(val * 0.264172).toFixed(
    3
  )} gallons | ${val} gallons = ${(val * 3.78541).toFixed(3)} liters`;

  mass.textContent = `${val} kilos = ${(val * 2.20462).toFixed(
    3
  )} pounds | ${val} pounds = ${(val * 0.453592).toFixed(3)} kilos`;
});
