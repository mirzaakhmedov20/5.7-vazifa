const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function switchTheme() {
  var toggleSwitch = document.getElementById("toggleSwitch");
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

function validateRegister(
  name,
  surname,
  age,
  email,
  username,
  password,
  repassword
) {
  if (name.value.trim().length < 3) {
    alert("Name is empty");
    name.focus();
    return false;
  }
  if (Number(name.value)) {
    alert("Name should not be a number");
    name.focus();
    return false;
  }

  if (surname.value.trim().length < 3) {
    alert("surname is empty");
    surname.focus();
    return false;
  }

  if (!age.value) {
    alert("age is empty");
    age.focus();
    return false;
  }
  if (age.value < 0 || age.value > 150) {
    alert("This age is no or too old");
    age.focus();
    return false;
  }

  if (!Number(age.value)) {
    alert("Age need to be number");
    age.focus();
    return false;
  }

  if (email.value.trim().length < 3) {
    alert("Email is empty");
    email.focus();
    return false;
  }

  if (!validateEmail(email.value)) {
    alert("Email does not match");
    email.focus();
    return false;
  }

  if (username.value.trim().length < 5) {
    alert("username is empty");
    username.focus();
    return false;
  }

  if (password.value.trim().length < 4) {
    alert("password is empty");
    password.focus();
    return false;
  }

  if (repassword.value.trim().length < 3) {
    alert("repassword is empty");
    repassword.focus();
    return false;
  }

  if (password.value != repassword.value) {
    alert("Password and repassword do not match");
    password.focus();
    repassword.value = "";
    return false;
  }

  let users = getData();
  if (users.length) {
    let isExist = users.some((user) => {
      return user.username == username.value;
    });
    if (isExist) {
      alert("Bunday username mavjud");
      return false;
    }
  }

  return true;
}
function validateLogin(  username,password) {
  
  if (username.value.trim().length < 4) {
    alert("username is empty");
    username.focus();
    return false;
  }

  if (password.value.trim().length < 4) {
    alert("password is empty");
    password.focus();
    return false;
  }

  return true;
}
function getData() {
  let data = [];

  if (localStorage.getItem("users")) {
    data = JSON.parse(localStorage.getItem("users"));
  }
  return data;
}
export {validateRegister, validateLogin, getData, switchTheme };
