console.log("Calculator by Meet Mehta");

let screenValue = "";

const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screen.value += buttonText;
      screenValue = screen.value;
    } else if (buttonText == "C") {
      screen.value = "";
      screenValue = screen.value;
    } else if (buttonText == "=") {
      buttonText = eval(screenValue);
      screen.value = buttonText;
    } else if (buttonText == "<==") {
      screenValue = screen.value.slice(0, -1);
      screen.value = screenValue;
    } else {
      screen.value += buttonText;
      screenValue = screen.value;
    }
  });
}
