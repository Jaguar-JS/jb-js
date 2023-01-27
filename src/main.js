let $taskList = document.getElementById("task-list")
let taskList = [
    {
        task: 'Email David',
        isChecked: false
    },
    {
        task: 'Create ideal user persona guide',
        isChecked: false
    },
    {
        task: 'Set up A/B test',
        isChecked: true
    },
    {
        task: 'Have lunch with Mike',
        isChecked: false
    },
    {
        task: 'Have lunch with Mike',
        isChecked: false
    }
]

window.addEventListener('load', function () {
    console.log("page is loading!!!")
    loadingStoreTaskList(taskList)
})


document.body.addEventListener('click', e => {
    if (e.target.id === 'add-task-button') addTask(e)
    if (e.target.className === 'delete-btn') delTask(e.target)
    if (e.target.className === 'check') saveStoreTaskList()
});

function loadingStoreTaskList(arr) {
    taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    let tasksHTML = ''
    arr.forEach((el) => {
        if (el.isChecked) {
            tasksHTML += `<li>
    <input type='checkbox' class='check' checked>
    <span class='task'>${el.task}</span>
    <button class='delete-btn'></button></li>`
        } else {
            tasksHTML += `<li>
    <input type='checkbox' class='check'>
     <span class='task'>${el.task}</span>
     <button class='delete-btn'></button></li>`
        }

    })
    $taskList.innerHTML = tasksHTML;
}


function addTask(e) {
    e.preventDefault();
    let inpTask = document.getElementById('input-task').value
    let taskHTML =
        `<li>
        <input type='checkbox' class='check'>
        <span class='task'>${inpTask}</span>
    <button class='delete-btn'></button></li>`

    $taskList.insertAdjacentHTML("beforeend", taskHTML)
    document.getElementById('input-task').value = ''
    saveStoreTaskList();
}

function delTask(target) {
    target.parentNode.remove();
    saveStoreTaskList();
}

function saveStoreTaskList() {
    let taskList = []
    for (let task of document.querySelectorAll("li")) {
        taskList.push({'task': task.querySelector("span").innerText, 'isChecked': task.querySelector("input").checked});
    }
    localStorage.setItem("tasks", JSON.stringify(taskList));
}
