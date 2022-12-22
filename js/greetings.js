const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    //1. 브라우저의 기본 동작을 막게 되고, 우리가 원하는 대로 할 수 있게 됨
    // form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 사용 (submit은 작동됨)
    event.preventDefault();
    //2. form에 hidden이라는 class를 추가
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //3. loginInput의 값을 username이라는 변수에 저장 
    //-> paintGreetings를 호추하는 순간, 유저 정보는 이미 local storage에 저장, 따라서 username변수 만들 필요x
    //const username = loginInput.value;
    //4. localStorage에 username을 영구적으로 저장
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    //5. 기본적으로 비어있는 h1인 greeting을 가져다가 "Hello username"을 넣어줌(${}을 활용해 string안에 username값 넣음)
    //6. h1에 hidden이라는 class를 삭제
    paintGreetings();
}       

function paintGreetings() {
    //유저 정보 확인
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;    
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//변수 존재 여부 확인
if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    //localStorage에 저장된 값을 인자로 받음(savedUsername)
    paintGreetings();

}