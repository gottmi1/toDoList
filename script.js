var loginForm = document.querySelector(".login-form");
var loginInput = loginForm.querySelector("input");
var loginButton = loginForm.querySelector("button");
var a = document.querySelector("a");
var Hone = document.querySelector("h1");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log(e);
    var userName = loginInput.value;
    loginForm.classList.add("hidden");
    Hone.innerText = "".concat(userName, "\uB2D8 \uBC18\uAC00\uC6CC\uC6A9");
});
