let count = 0;
const button = document.querySelector("#cheer");
const output = document.querySelector("#count");
button.addEventListener("click", () => {
  output.textContent = `응원 ${++count}회`;
});
