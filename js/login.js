import { getData, validateLogin, switchTheme } from "./function";

const button = document.getElementById("button");
const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.addEventListener("change", switchTheme);

button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const isValid = validateLogin( username, password );
    if (isValid) {
      const user = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        email: email.value,
        username: username.value,
        password: password.value,
      };

      
    }
  });
