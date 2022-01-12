const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const a = document.querySelector("a");
const Hone = document.querySelector("h1");

function onLoginSubmit(e) {
  e.preventDefault();
  // console.log(e);
  const userName:string = loginInput.value;
  loginForm.classList.add("hidden");
  localStorage.setItem('username' ,userName);
  paintGreetings(userName);
}

function paintGreetings(username:string) {
    Hone.classList.remove('hidden');
    Hone.innerText = `${username}님 반가워용`;
}

const savedUserName:string = localStorage.getItem("username");
// username이라는 키를 가지고 값을 찾음
// console.log(savedUserName);

  
  if (savedUserName === null) {
    // savedUserName에 값이 없을 때, form을 보여주고 addEventListener를 추가
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
  } else { // savedUserName에 이미 값이 있다면 이것을 출력
    loginForm.classList.add("hidden");
    paintGreetings(savedUserName);
  }

///// greetings

const clock = document.querySelector('#clock');

function getClock() {
  // padStart는 es2017이후 문법이기 떄문에 tsconfig에서 target을 es2017이상으로 바꿔줘야 한다.
  // padStart(nubmer, string)의 앞 매개변수는 최대 숫자 개수, 뒤 매개변수는 최대 숫자 개수가 아닐 경우 빈자리를 채워주는 문자열로 구성됨.
  // String()은 안에 들어간 값을 문자열로 받겠다는 뜻
  const hours:string = String(new Date().getHours()).padStart(2,"0");
  const minutes:string = String(new Date().getMinutes()).padStart(2,"0");
  const seconds:string = String(new Date().getSeconds()).padStart(2,"0");
  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;

}
getClock()
// setInterval은 1초 후에 진행되기 때문에 미리 호출해 놓은 것
setInterval(getClock, 1000);

////// clock

