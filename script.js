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
// console.log(savedUserName);
if (savedUserName === null) {
    // savedUserName에 값이 없을 때, form을 보여주고 addEventListener를 추가
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}
else { // savedUserName에 이미 값이 있다면 이것을 출력
    loginForm.classList.add("hidden");
    paintGreetings(savedUserName);
}
///// greetings
const clock = document.querySelector('#clock');
function getClock() {
    // padStart는 es2017이후 문법이기 떄문에 tsconfig에서 target을 es2017이상으로 바꿔줘야 한다.
    // padStart(nubmer, string)의 앞 매개변수는 최대 숫자 개수, 뒤 매개변수는 최대 숫자 개수가 아닐 경우 빈자리를 채워주는 문자열로 구성됨.
    // String()은 안에 들어간 값을 문자열로 받겠다는 뜻
    const hours = String(new Date().getHours()).padStart(2, "0");
    const minutes = String(new Date().getMinutes()).padStart(2, "0");
    const seconds = String(new Date().getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
getClock();
// setInterval은 1초 후에 진행되기 때문에 미리 호출해 놓은 것
setInterval(getClock, 1000);
////// clock
const quotes = [
    {
        quote: "한낱 빛 따위가 어둠의 깊이를 어찌 알랴",
        author: "Friedrich Nietzsche"
    }, {
        quote: "고난이  심할수록 내 가슴은 뛴다",
        author: "Friedrich Nietzsche"
    }, {
        quote: "네 운명을 사랑하라",
        author: "Friedrich Nietzsche"
    }, {
        quote: "몇 번이라도 좋다. 이 끔찍한 삶이여, 다시 한 번!",
        author: "Friedrich Nietzsche"
    }, {
        quote: "그대의 영혼 속에 깃들어 있는 영웅을 절대 버리지 않기를",
        author: "Friedrich Nietzsche"
    }, {
        quote: "아무 것도 성취하지 못 했을지라도 자신을 존경하라 거기게 상황을 바꿀 힘이 있으니",
        author: "Friedrich Nietzsche"
    }, {
        quote: "우리가 심연을 오래 들여다보면, 심연 또한 우리를 들여다 본다.",
        author: "Friedrich Nietzsche"
    }, {
        quote: "상처에 의해 정신은 고양되고, 새 힘은 솟아 오른다.",
        author: "Friedrich Nietzsche"
    }, {
        quote: "춤추는 별을 잉태하려면 반드시 스스로의 내면에 혼돈을 지녀야 한다.",
        author: "Friedrich Nietzsche"
    }, {
        quote: "작은 게 최상의 행복을 만든다.",
        author: "Friedrich Nietzsche"
    },
];
const quote = document.querySelector('#quote>span:first-child');
const author = document.querySelector('#quote>span:last-child');
// Math.random을 사용해 quotes 배열 안에 있는 객체를 랜덤으로 받아온다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todaysQuote);
quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
////// quotes
const imgArr = ['0.jpg', '1.jpg', '2.jpg'];
const todaysBG = imgArr[Math.floor(Math.random() * imgArr.length)];
const image = document.createElement('img');
image.src = `img/${todaysBG}`;
document.body.appendChild(image);
console.log(image);
////// background img
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const toDos = [];
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
    // JSON.stringify(변수명);을 해주면 받는 문자열을 Array의 인자를 받는 것 처럼 받을 수 있다.
}
function deleteToDo() {
    console.log(this.parentNode);
    this.parentNode.remove();
}
/////// 만든 to do list를 삭제
function paintToDo(newTodo) {
    console.log(`I will paint ${newTodo}.`);
    const $li = document.createElement('li');
    const $span = document.createElement('span');
    $span.textContent = newTodo;
    const $btn = document.createElement('button');
    $btn.innerText = 'X';
    $btn.addEventListener("click", deleteToDo);
    $li.append($span);
    $li.append($btn);
    toDoList.appendChild($li);
}
function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    console.log(newTodo);
    toDoInput.value = "";
    paintToDo(newTodo); // 바깥 스코프에 있는 함수를 호출해서 현재 스코프 안에 있는 변수를 쓸 수 있게 만듬
    toDos.push(newTodo);
    console.log(toDos);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
///// to do list 추가 및 출력까지
