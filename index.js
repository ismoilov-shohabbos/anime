let user;

function nextClick() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password");
  user = findUserByUsername(username);

  if (user) {
    document.querySelector(".username").style.display = "none";
    document.querySelector(".password").style.display = "flex";
    password.focus();
  } else {
    alert("Xato");
  }
}

function acceptClick() {
  let password = document.getElementById("password").value;

  if (user.password === password) {
    window.location.replace("/practice/main/main.html");
    localStorage.setItem("auth", String(true));
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    alert("Xato!!!");
  }
}

function handleKeyPress(e, func) {
  if (e.keyCode === 13) {
    func();
  }
}

// Username focus
let username = document.getElementById("username");
username.focus();
