let isAuth = localStorage.getItem("auth");
if (!isAuth) {
  window.location.replace("/practice/index.html");
}

// set user name
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.name);

function exit() {
  window.location.replace("/practice/index.html");
  localStorage.clear(isAuth);
}

// search anime character

function nextAnime(e) {
  if (e.keyCode === 13) {
    let search = document.getElementById("search_anime_pers").value;
    document.body.style.backgroundImage = `url(../images/${search}.jpg)`;
  }
}

// secret prompt
if (hasPermisson("SECRET_PROMPT")) {
  window.addEventListener("keyup", (e) => {
    const password = "1000-7";
    if (e.keyCode === 88) {
      let not = prompt("Parolni kiritng");
      if (not === password) {
        document.querySelector(".anime_container").classList.add("active");
      }
    }
  });
}

// log out

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 27) {
    exit();
  }
});

// show iframe
function openIframe(id) {
  let iframe = document.querySelector("#iframe");
  let baseUrl = "https://amediatv.uz/season/";

  if (!iframe.className.includes("active")) {
    iframe.classList.add("active");
  }

  iframe.src = baseUrl + id;
}
