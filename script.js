// Getting the elements
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");
const deleteBtn = document.getElementById("deleteBtn");
const resetBtn = document.getElementById("resetBtn");
const calculateBtn = document.getElementById("calculateBtn");
// Get the root element
var r = document.querySelector(":root");
const theme1Btn = document.getElementById("theme1");
const theme2Btn = document.getElementById("theme2");
const theme3Btn = document.getElementById("theme3");

/**
 * ! Calculator Buttons functions
 **/

// For displaying number and operands on screen
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // if there is nothing on screen and key pressed is "*" or "/" or "+"
    if (
      (screen.value === "" && btn.innerText === "*") ||
      (screen.value === "" && btn.innerText === "/") ||
      (screen.value === "" && btn.innerText === "+")
    ) {
      screen.value = "";
      return;
    }
    // if last character is "*" , don't allow "/"
    // if last character is "/" . don't allow "*"
    // invalid regular expression : missing /
    if (
      (screen.value[screen.value.length - 1] === "*" &&
        btn.innerText === "/") ||
      (screen.value[screen.value.length - 1] === "/" && btn.innerText === "*")
    ) {
      screen.value =
        screen.value.substring(0, screen.value.length - 1) + btn.innerText;
      return;
    }
    // if last character is "-" ,  don't allow "x or /"
    // uncaught syntax error *,/
    if (
      (btn.innerText === "*" || btn.innerText === "/") &&
      screen.value[screen.value.length - 1] === "-"
    ) {
      screen.value =
        screen.value.substring(0, screen.value.length - 1) + btn.innerText;
      return;
    }
    if (
      (btn.innerText === "*" || btn.innerText === "/") &&
      screen.value[screen.value.length - 1] === "+"
    ) {
      screen.value =
        screen.value.substring(0, screen.value.length - 1) + btn.innerText;
      return;
    }

    // When there is 0 on screen
    if (screen.value === "0") {
      screen.value = btn.innerText;
      return;
    }

    // Default behavoiur
    screen.value = screen.value + btn.innerText;
  });
});

// deleteBtn for deleting last character
deleteBtn.addEventListener("click", () => {
  screen.value = screen.value.substring(0, screen.value.length - 1);
});

// resetBtn for resetiing to 0
resetBtn.addEventListener("click", () => {
  screen.value = 0;
});

// calculateBtn for evaluating the equation
calculateBtn.addEventListener("click", () => {
  screen.value = eval(screen.value);
});

/**
 * ! For theme changing purposes
 **/

theme1Btn.addEventListener("click", () => {
  // console.log("Theme 1 is selected...");
  // setting up themes button
  theme1Btn.style.cssText = "background-color:hsl(6, 63%, 50%)";
  theme2Btn.style.cssText = "background-color:hsl(223, 31%, 20%)";
  theme3Btn.style.cssText = "background-color:hsl(223, 31%, 20%)";

  r.style.setProperty("--main-bg-color", "hsl(222, 26%, 31%)");
  r.style.setProperty("--keypad-bg-color", "hsl(223, 31%, 20%)");
  r.style.setProperty("--screen-bg-color", "hsl(224, 36%, 15%)");
  r.style.setProperty("--key-bg-color", "hsl(225, 21%, 49%)");
  r.style.setProperty("--key-shadow-color", "hsl(224, 28%, 35%)");
  r.style.setProperty("--toggle-bg-color", "hsl(6, 63%, 50%)");
  r.style.setProperty("--shadow-bg-color", "hsl(6, 70%, 34%)");
  r.style.setProperty("--simplekey-bg-color", "hsl(30, 25%, 89%)");
  r.style.setProperty("--simplekey-shadow-color", "hsl(28, 16%, 65%)");
  r.style.setProperty("--simplekey-text-color", "hsl(221, 14%, 31%)");
  r.style.setProperty("--screen-text-color", "#ffffff");
});

theme2Btn.addEventListener("click", () => {
  // console.log("Theme 2 is selected...");
  // setting up themes button
  theme2Btn.style.cssText = "background-color:hsl(25, 98%, 40%)";
  theme1Btn.style.cssText = "background-color:hsl(0, 5%, 81%)";
  theme3Btn.style.cssText = "background-color:hsl(0, 5%, 81%)";

  r.style.setProperty("--main-bg-color", "hsl(0, 0%, 90%)");
  r.style.setProperty("--keypad-bg-color", "hsl(0, 5%, 81%)");
  r.style.setProperty("--screen-bg-color", "hsl(0, 0%, 93%)");
  r.style.setProperty("--key-bg-color", "hsl(185, 42%, 37%)");
  r.style.setProperty("--key-shadow-color", "hsl(185, 58%, 25%)");
  r.style.setProperty("--toggle-bg-color", "hsl(25, 98%, 40%)");
  r.style.setProperty("--shadow-bg-color", "hsl(25, 99%, 27%)");
  r.style.setProperty("--simplekey-bg-color", "hsl(45, 7%, 89%)");
  r.style.setProperty("--simplekey-shadow-color", "hsl(35, 11%, 61%)");
  r.style.setProperty("--simplekey-text-color", "hsl(60, 10%, 19%)");
  r.style.setProperty("--screen-text-color", "hsl(0, 0, 100%)");
});

theme3Btn.addEventListener("click", () => {
  // console.log("Theme 3 is selected...");
  // setting up themes button
  theme3Btn.style.cssText = "background-color:hsl(176, 100%, 44%)";
  theme1Btn.style.cssText = "background-color:hsl(268, 71%, 12%)";
  theme2Btn.style.cssText = "background-color:hsl(268, 71%, 12%)";

  r.style.setProperty("--main-bg-color", "hsl(268, 75%, 9%)");
  r.style.setProperty("--keypad-bg-color", "hsl(268, 71%, 12%)");
  r.style.setProperty("--screen-bg-color", "hsl(268, 71%, 12%)");
  r.style.setProperty("--key-bg-color", "hsl(281, 89%, 26%)");
  r.style.setProperty("--key-shadow-color", "hsl(285, 91%, 52%)");
  r.style.setProperty("--toggle-bg-color", "hsl(176, 100%, 44%)");
  r.style.setProperty("--shadow-bg-color", "hsl(177, 92%, 70%)");
  r.style.setProperty("--simplekey-bg-color", "hsl(268, 47%, 21%)");
  r.style.setProperty("--simplekey-shadow-color", "hsl(290, 70%, 36%)");
  r.style.setProperty("--simplekey-text-color", "hsl(52, 100%, 62%)");
  r.style.setProperty("--screen-text-color", "hsl(52, 100%, 62%)");
});
