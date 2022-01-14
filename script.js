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
////// background img
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
let toDos = [];
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
    // todos의 value를 stringify로 "문자열화 시킨 후" todos:Array의 인자로 넣는다
    // JSON.stringify(변수명);을 해주면 받는 문자열을 Array의 인자를 받는 것 처럼 받을 수 있다. 반대로 스트링을 Array로 바꿔주는 건 JSON.parse();
}
function deleteToDo(e) {
    const li = e.target.parentNode;
    // li는 현재 누른 버튼의 부모요소
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    // 이렇게 하면 될 것 같지만 받는 값이 string이기 떄문에 number로 바꿔줄 필요가 있다
    // filter로 현재 누른 li의 id와 같은 id값을 가진 객체를 제외하고 새 배열을 toDos로 반환
    li.remove();
    saveToDos(); // 위에서 받은 새 배열을 업데이트 해준다
}
/////// 만든 to do list를 삭제
function paintToDo(newTodo) {
    console.log(`I will paint ${newTodo.id}.`);
    const $li = document.createElement('li');
    $li.id = newTodo.id;
    // DOM에 li를 만들면서 id까지 추가해준다 이 함수의 매개변수의 id를 추가해주는데, 해당 함수는 매개변수로 newToDoObject를 받고있기 때문에 결과적으로 newToDoObject의 id인 Date.now()를 가져와서 id로 받는 셈
    const $span = document.createElement('span');
    $span.innerText = newTodo.text;
    const $btn = document.createElement('button');
    $btn.innerText = 'X';
    $btn.addEventListener("click", deleteToDo);
    // 버튼을 클릭하면 deleteToDo가 실행되게
    $li.append($span);
    $li.append($btn);
    toDoList.appendChild($li);
}
function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObject);
    paintToDo(newToDoObject); // 바깥 스코프에 있는 함수를 호출해서 현재 스코프 안에 있는 변수를 쓸 수 있게 만들 수도 있음
    console.log(toDos);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
///// to do list 추가 및 출력까지
const savedToDos = localStorage.getItem("todos");
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // 위에서 stringify로 받아온 ["a","b"]형식의 문자열 배열을 [a,b] 형식의 키(인덱스)와 프로퍼티(값)가 있는 배열로 받아온다. 대부분의 경우 Array의 item들을 가지고 무엇을 하기 떄문에 매우 중요한 메서드.
    toDos = parsedToDos;
    // Array이기 떄문에 forEach를 사용할 수 있다.
    parsedToDos.forEach(paintToDo); // forEach는 array의 각 item에 대해 순환하며 function을 실행해준다. paimTodo(newToDo)에서 newToDo에 각각의 item들을 자동으로 대입해줌
}
const myAPI = "ae077128449cf88203196cd19fcc1cab";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // 현재의 위도와 경도를 받아온다.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${myAPI}&units=metric`;
    fetch(url)
        .then(respnse => respnse.json())
        .then(data => {
        const weatherCon = document.querySelector('#weather');
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerHTML = ` ${data.name}`;
        weather.innerHTML = `${data.weather[0].main} / ${Math.floor(data.main.temp)}`;
        weatherCon.appendChild(weather);
        weatherCon.appendChild(city);
    });
}
function onGeoErr() {
    alert("위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
// getCurrentPositon의 매개변수로는 성공햇을 때의 값과 에러가 떴을때의 값을 방아온다.
