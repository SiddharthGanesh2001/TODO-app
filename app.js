// document.addEventListener("submit", submitHandler);

// const submitHandler=function(event) {
//     let task=document.querySelector("textarea").value
//     console.log(task);
// }
let taskBox=[];
let ul=document.createElement("ul");
document.querySelector("#tasks").appendChild(ul);
const addButton=document.querySelector("#add");



const clickHandler=function(event) {
    const task=new Object();

    task.title=document.querySelector("#addTaskBox").value;
    task.status="pending";
    taskBox.push(task);
    console.log(taskBox);
    let taskHTML=getTaskHTMLContent(task);
    document.querySelector("#addTaskBox").value="";
    renderTaskBox(taskHTML);
    
}
addButton.addEventListener("click", clickHandler);


function getTaskHTMLContent(task) {
    let taskHTML=`<li>
                    <input type="checkbox" name="${task.title}" value="${task.title}"/>
                    <label for="${task.title}">${task.title}</label>
                </li>`
    console.log(taskHTML);
    return taskHTML;
}

function renderTaskBox(taskHTML) {
    ul.insertAdjacentHTML("beforeend",taskHTML);

}
