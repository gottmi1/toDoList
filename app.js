const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleBtnClick() {
  const value = loginInput.value;
  console.log(value);
}

loginForm.addEventListener("click", (e) => {
  e.preventDefault();
});
loginButton.addEventListener("click", handleBtnClick);
