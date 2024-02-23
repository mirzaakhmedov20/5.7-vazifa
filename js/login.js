import { getData, validateLogin, switchTheme } from "./function.js";

const button = document.getElementById("button");
const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.addEventListener("change", switchTheme);

button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const isValid = validateLogin(username, password);

    if (isValid) {
      let users = getData();
      let user = users.find((el) => {
        return el.username == username.value && el.password == password.value;
      });
      console.log(user);
    }
  });
