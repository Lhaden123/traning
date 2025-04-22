let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value;


    if (!text) {
        alert("Task  cannot be empty");
        return;
    }

    const task = {
        id: Date.now(),
        createdDate: new Date().toISOString(),
        text: text,
    };

    tasks.push(task);
    renderTasks();
    input.value = "";
}

function formatDate(iso) {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    };
    return new Date(iso).toLocaleString(undefined, options);
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";


    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const li = document.createElement("li");


        const date = document.createElement("span");
        date.textContent = `${formatDate(task.createdDate)} -`;

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        const button = document.createElement("button");
        button.textContent =`Delete`;

        button.onclick = function () {
            deleteTask(task.id);
        };

        li.appendChild(date);
        li.appendChild(taskText);
        li.appendChild(button);

        list.appendChild(li);
    }
}
function deleteTask(id){
    tasks = tasks.filter(function (item){
        if (item.id === id){
            return false;
        }else {
            return true;

        }
    });
    renderTasks();
}