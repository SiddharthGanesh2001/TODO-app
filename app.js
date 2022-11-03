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
    getTaskBoxHTMLContent(taskBox);
    
}
addButton.addEventListener("click", clickHandler);


function getTaskBoxHTMLContent(taskBox) {
    let taskBoxHTML=taskBox.map((task) => {
        return `<li>
                    <input type="checkbox" name="${task.title}" value="${task.title}/>
                </li>`
    }).join('');
    return taskBoxHTML;
}

function renderTaskBox(taskBoxHTML) {
    ul.insertAdjacentElement("beforeend",taskBoxHTML);

}
