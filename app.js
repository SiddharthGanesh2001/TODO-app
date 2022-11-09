class TaskModel {
    constructor(name) {
        this.name=name;
        this.ID=Date.now();
    }
}
class TaskCollection {
    constructor() {
        this.taskCollection=[];
    }
    add(taskModel) {
        this.taskCollection.push(taskModel);
    }
    remove(...IDs) {
        for (let ID of IDs) {
            for (let i = 0; i < this.taskCollection.length; i++) {
                if (this.taskCollection[i].ID == ID) {
                    this.taskCollection.splice(i, 1);
                }
            }
        }
    }
}
let taskCollection=new TaskCollection();
let ul=document.createElement("ul");
document.querySelector("#taskBox").appendChild(ul);
const addButton=document.querySelector("#add");
const taskBox=document.querySelector("#taskBox");
const addTask=document.querySelector("#addTaskBox");
const clearCompleted=document.querySelector("#clearCompleted");

const addHandler=function (event) {
    let taskModel=new TaskModel(document.querySelector("#addTaskBox").value);
    taskCollection.add(taskModel);
    if (taskModel.name) {
        console.log(taskCollection);
        console.log(taskModel);
        let taskHTML=getTaskHTMLContent(taskModel, null);
        document.querySelector("#addTaskBox").value="";
        renderTaskBox(taskHTML);
    }
}
addButton.addEventListener("click", addHandler);

const enterHandler=function (event) {
    if (event.code==='Enter') {
        addHandler();
    }
}
addTask, addEventListener("keydown", enterHandler);

const removeHandler=function (event) {
    let target=event.target;
    if (target.nodeName==="BUTTON") {
        console.log("remove button");
        console.log(target.id);
        taskCollection.remove(target.id);
        console.log(taskCollection);
        document.querySelector("ul").removeChild(document.getElementById(target.id));
    }
}
taskBox.addEventListener("click", removeHandler);

const clearHandler=function(event) {
    console.log("Clear Completed!");
    let tasks=document.querySelectorAll("li");
    for(let task of tasks) {
        let sumvar=task.querySelector("input[type=checkbox]");
        if(sumvar.checked) {
            document.querySelector("ul").removeChild(task);
        }
    }
}
clearCompleted.addEventListener("click", clearHandler);

function getTaskHTMLContent(taskModel, taskCollection) {

    let taskHTML=`<li id="${taskModel.ID}">
                    <input type="checkbox" name="${taskModel.name}" id="${taskModel.name}"/>
                    <label for="${taskModel.name}">${taskModel.name}</label>
                    <span class="removeButton">
                        <button id="${taskModel.ID}">X</button>
                    </span><br><br>
                </li>`;    
    console.log(taskHTML);
    return taskHTML;
}

function renderTaskBox(taskHTML) {
    ul.insertAdjacentHTML("beforeend", taskHTML);
}
