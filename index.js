const btnAdicionarTaks = document.getElementById('addButton');

function addTask (){
    // Pegar o valor digitado no campo de adicionar tarefa
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskInput.value === ""){
        alert("Ta sem nada mané");
    } else {
        criarTarefa(taskText);
        taskInput.value = "";
    }
}

function criarTarefa (taskText) {
    // Pegar o elemento ul do html
    const taskList = document.getElementById('taskList');

    // criar o elemento li para a nossa ul
    const newTask = document.createElement('li');
    const taskTextNode = document.createTextNode(taskText);
    newTask.appendChild(taskTextNode);

    // Adicionar a li dentro da ul
    taskList.appendChild(newTask);
}

btnAdicionarTaks.setAttribute('onclick', 'addTask()');