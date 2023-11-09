const taskInput = document.getElementById('toDoItem');
const addBtn = document.getElementById('enter');
const taskList = document.getElementById('taskList');

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
});

