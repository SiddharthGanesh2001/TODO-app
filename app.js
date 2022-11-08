class TaskModel {
    constructor(taskName) {
        this.taskName=taskName;
        this.taskStatus="PENDING";
        this.taskID=Date.now();
    }    
    updateTaskStatus(taskID){
            this.taskID=taskID;
            this.taskStatus="COMPLETED";
    }
    
}
class TaskCollection {
    constructor() {
        this.taskCollection=[];
    }
    addTaskModel(taskModel) {
        this.taskCollection.push(taskModel);
    }
    removeTaskModel(ID) {
        let index=this.taskCollection.indexOf(ID);
        this.taskCollection.splice(index,1);
    }

}
let taskCollection=new TaskCollection();
let ul=document.createElement("ul");
document.querySelector("#taskBox").appendChild(ul);
const addButton=document.querySelector("#add");
const taskBox=document.querySelector("#taskBox");
const addTask=document.querySelector("#addTaskBox");

const addHandler=function(event) {
    let taskModel=new TaskModel(document.querySelector("#addTaskBox").value);
    taskCollection.addTaskModel(taskModel);
    if(taskModel.taskName){
        console.log(taskCollection);
        console.log(taskModel);
        let taskHTML=getTaskHTMLContent(taskModel,null);
        document.querySelector("#addTaskBox").value="";
        renderTaskBox(taskHTML);
    }
}
addButton.addEventListener("click", addHandler);

const enterHandler=function(event) { 
    if(event.code==='Enter'){
        addHandler();
    }
}
addTask,addEventListener("keydown", enterHandler);

const removeHandler=function(event) {
    let target=event.target;
    console.log(event);
    if(target.nodeName==="BUTTON"){
    //     event.currentTarget.getAttribute("")
        console.log("remove button");
        console.log(target.id);
        taskCollection.removeTaskModel(target.id);
        console.log(taskCollection);
        let taskHTML=getTaskHTMLContent(null,taskCollection);
        document.querySelector("ul").replaceChildren();
        renderTaskBox(taskHTML);
    }
}
taskBox.addEventListener("click",removeHandler);

function getTaskHTMLContent(taskModel,taskCollection) {
    if(taskModel) {
        let taskHTML=`<li>
                        <input type="checkbox" name="${taskModel.taskName}" id="${taskModel.taskName}"/>
                        <label for="${taskModel.taskName}">${taskModel.taskName}</label>
                        <span class="removeButton">
                            <button id="${taskModel.taskID}">X</button>
                        </span><br><br>
                    </li>`;
        console.log(taskHTML);
        return taskHTML;
    }
    else if(taskCollection) {
        let taskHTML=taskCollection.taskCollection.map((taskModel) => {
            return `<li>
                        <input type="checkbox" name="${taskModel.taskName}" id="${taskModel.taskName}"/>
                        <label for="${taskModel.taskName}">${taskModel.taskName}</label>
                        <span class="removeButton">
                            <button id="${taskModel.taskID}">X</button>
                        </span><br><br>
                    </li>`;
        }).join('');
        console.log(taskHTML);
        return taskHTML;
    }
    
}


function renderTaskBox(taskHTML) {
    ul.insertAdjacentHTML("beforeend",taskHTML);

}
