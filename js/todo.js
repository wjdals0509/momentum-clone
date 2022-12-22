const toDoForm = document.getElementById("todo-form");
//const todoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    //JSON.stringify() : 무엇이든 string으로 바꿔줌
    //JSON.parse() : array를 string으로 바꿔줌
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    //이때 li값은 영구삭제가 아니고 화면에서만 삭제되는것임
    li.remove();
    //클릭했던 li의 id를 갖고 있는 toDo 삭제
    //toDo의 id가 li의 id와 다른걸 남김
    //toDo는 toDos db에 있는 요소 중 하나
    //li.id는 string타입이기 때문에 number타입으로 바꾸기 위해 parseInt사용
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    //newTodoObj를 받기때문에 text와 id모두 나타남
    //따라서 newTodo.text로 text만 받게 작성
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    //input의 현재 value를 새로운 변수(newTodo)에 복사
    const newTodo = toDoInput.value;
    //input값 입력하고 enter를 누르면 input창에서 입력값이 사라짐
    //이때 입력값이 없어졌다고 해도 newTodo값이 사라지는것은 아님
    //결론적으로 어떤 작업이라도 newTodo에 아무런 영향x
    toDoInput.value = "";
    //유저가 작성한 text를 push
    //toDos.push(newTodo);
    //object 생성
    const newTodoObj = {
        text: newTodo,
        //Data.now():랜덤숫자
        //id로 각각의 li item을 구별
        id: Date.now(),
    };
    //유저가 작성한 object를 push
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //parsedToDos에 있는 각각의 item에 대해 console.log를 할것임
    //function sayHello(item) {console.log("this is the turn of", item);} === parsedToDos.forEach((item) => console.log("this is the turn of", item));
    parsedToDos.forEach(paintToDo);
}