const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const a = document.querySelector("a");
const Hone = document.querySelector("h1");
function onLoginSubmit(e) {
    e.preventDefault();
    // console.log(e);
    const userName = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem('username', userName);
    paintGreetings(userName);
}
function paintGreetings(username) {
    Hone.classList.remove('hidden');
    Hone.innerText = `${username}님 반가워용`;
}
const savedUserName = localStorage.getItem("username");
// username이라는 키를 가지고 값을 찾음
console.log(savedUserName);
if (savedUserName === null) {
    // savedUserName에 값이 없을 때, form을 보여주고 addEventListener를 추가
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}
else { // savedUserName에 이미 값이 있다면 이것을 출력
    loginForm.classList.add("hidden");
    paintGreetings(savedUserName);
}
