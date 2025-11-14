let menu_btn = document.getElementById("menu-btn");
let menu_close = document.getElementById("menu-close");
let mobile_nav = document.getElementById("mobile-nav");

function func() {
  let details = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("msg").value,
  };

  const serviceID = "service_qnidsa8";
  const templateID = "template_25dy7dv";

  emailjs
    .send(serviceID, templateID, details)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("msg").value = "";
      console.log(res);
      alert("Your message was sent successfully!");
    })
    .catch((err) => console.log(err));
}

function menu(show) {
  if (show) {
    menu_close.classList.remove("hidden");
    menu_btn.classList.add("hidden");
    mobile_nav.classList.remove("hidden");
    mobile_nav.classList.add("flex", "md:hidden");
  } else {
    menu_btn.classList.remove("hidden");
    menu_close.classList.add("hidden");
    mobile_nav.classList.add("hidden");
    mobile_nav.classList.remove("flex");
  }
}
function removeNav() {
  menu_btn.classList.remove("hidden");
  menu_close.classList.add("hidden");
  mobile_nav.classList.add("hidden");
  mobile_nav.classList.remove("flex");
}

const htmlEl = document.documentElement;
let beforeTheme = "red";

function setTheme(themeClass) {
  htmlEl.classList.remove("blue", "green", "yellow");
  if (themeClass) htmlEl.classList.add(themeClass);
  document.getElementById("me").src = `./images/me_${
    themeClass ? themeClass : "red"
  }.png`;
  beforeTheme = themeClass ? themeClass : "red";
  console.log(beforeTheme);
}
let theme_mobile = document.querySelector(".themeMobile");
let themes = document.querySelector(".themes");
let themeOn = true;
function dropdownMobile(i) {
  if (themeOn) {
    theme_mobile.classList.remove("hidden");
    themeOn = false;
  } else {
    theme_mobile.classList.add("hidden");
    themeOn = true;
  }
}
function dropdown() {
  if (themeOn) {
    themes.classList.remove("hidden");
    themeOn = false;
  } else {
    themes.classList.add("hidden");
    themeOn = true;
  }
}
