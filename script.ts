const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const a = document.querySelector("a");
const Hone = document.querySelector("h1");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e);
  let userName:number | string = loginInput.value;
  loginForm.classList.add("hidden");
  Hone.innerText = `${userName}님 반가워용`;
});
