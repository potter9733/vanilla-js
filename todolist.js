const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoPending = document.querySelector(".js-pending"),
  toDoFinished = document.querySelector(".js-finished");

const PENDING = "PENDING",
  FINISHED = "FINISHED";

let pendingArray = [];
let finishedArray = [];

function pendingDeleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoPending.removeChild(li);
  const cleanToDos = pendingArray.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pendingArray = cleanToDos;
  saveToDos();
}

function finishedDeleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoFinished.removeChild(li);
  const cleanToDos = finishedArray.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finishedArray = cleanToDos;
  finishedSaveToDos();
}

function preToDo() {
  const btn = event.target;
  const li = btn.parentNode;
  const finishedSpan = li.querySelector("span").innerText;
  const pendingLi = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newPendingId = pendingArray.length + 1;
  delBtn.addEventListener("click", pendingDeleteToDo);
  checkBtn.addEventListener("click", checkToDo);
  span.innerText = finishedSpan;
  delBtn.innerText = "❌";
  checkBtn.innerText = "✔";
  pendingLi.appendChild(span);
  pendingLi.appendChild(delBtn);
  pendingLi.appendChild(checkBtn);
  pendingLi.id = newPendingId;
  toDoPending.appendChild(pendingLi);
  const toDoObj = {
    text: finishedSpan,
    id: newPendingId
  };
  pendingArray.push(toDoObj);
  saveToDos();
  toDoFinished.removeChild(li);
  const cleanToDos = finishedArray.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finishedArray = cleanToDos;
  finishedSaveToDos();
}

function checkToDo() {
  const btn = event.target;
  const li = btn.parentNode;
  const pendingSpan = li.querySelector("span").innerText;
  const newFinishedId = finishedArray.length + 1;
  const finishedLi = document.createElement("li");
  const delBtn = document.createElement("button");
  const preBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.addEventListener("click", finishedDeleteToDo);
  preBtn.addEventListener("click", preToDo);
  span.innerText = pendingSpan;
  delBtn.innerText = "❌";
  preBtn.innerText = "⏪";
  finishedLi.appendChild(span);
  finishedLi.appendChild(delBtn);
  finishedLi.appendChild(preBtn);
  finishedLi.id = newFinishedId;
  toDoFinished.appendChild(finishedLi);
  const toDoObj = {
    text: pendingSpan,
    id: newFinishedId
  };
  finishedArray.push(toDoObj);
  finishedSaveToDos();
  toDoPending.removeChild(li);
  const cleanToDos = pendingArray.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pendingArray = cleanToDos;
  saveToDos();
}

function finishedSaveToDos() {
  localStorage.setItem(FINISHED, JSON.stringify(finishedArray));
}

function saveToDos() {
  localStorage.setItem(PENDING, JSON.stringify(pendingArray));
}

function pendingToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newPendingId = pendingArray.length + 1;
  delBtn.addEventListener("click", pendingDeleteToDo);
  checkBtn.addEventListener("click", checkToDo);
  span.innerText = text;
  delBtn.innerText = "❌";
  checkBtn.innerText = "✔";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newPendingId;
  toDoPending.appendChild(li);
  const toDoObj = {
    text: text,
    id: newPendingId
  };
  pendingArray.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  pendingToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
