let taskBox=[];
let ul=document.createElement("ul");
document.querySelector("#taskBox").appendChild(ul);
const addButton=document.querySelector("#add");

const addHandler=function(event) {
    const task=new Object();
    task.title=document.querySelector("#addTaskBox").value;
    task.status="pending";
    if(task.title){
        taskBox.push(task);
        console.log(taskBox);
        let taskHTML=getTaskHTMLContent(task);
        document.querySelector("#addTaskBox").value="";
        renderTaskBox(taskHTML);
    }
}
addButton.addEventListener("click", addHandler);
// const removeHandler=function(event) {
//     let task=
// }


function getTaskHTMLContent(task) {
    let taskHTML=`<li>
                    <input type="checkbox" name="${task.title}" id="${task.title}"/>
                    <label for="${task.title}">${task.title}</label>
                    <span class="removeButton">
                        <button><strong>X</strong></button>
                    </span><br><br>
                </li>`;
    console.log(taskHTML);
    return taskHTML;
}


function renderTaskBox(taskHTML) {
    ul.insertAdjacentHTML("beforeend",taskHTML);

}
