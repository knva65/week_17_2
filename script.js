
let tasks = [];

function addTask() {
let name = document.querySelector('#newTask').value;
reg = /viagra|xxx|идиот/i;
let newname = name.replace(reg, "***");
tasks.push(newname);
generateTasks();
document.querySelector('#newTask').value = '';
}

function generateTasks() {
let optionsString = "";
for (let task of tasks) {
    optionsString += `<div><span>${task}</span></div>`;
}
document.querySelector('#NewMessage').innerHTML = optionsString;
}

document.getElementById('forma').onsubmit = function(){return false};