import { getData, validateRegister } from "./function";

const button = document.getElementById("button");
const name = document.getElementById("name");
const age = document.getElementById("age");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const form = document.getElementById("form");

button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const isValid = validateRegister(
      name,
      surname,
      age,
      email,
      password,
      repassword
    );
    if (isValid) {
      const user = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        email: email.value,
        username: username.value,
        password: password.value,
      };

      let users = getData();
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      form.reset();
    }
  });
