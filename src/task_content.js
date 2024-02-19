import { delete_task } from "./delete_task";
import { modify_task, save_task } from "./modify_task";

export function task_content_creator(projects_array, get_task_name, get_task_date, get_task_note, projectIndex, currentTask) {
    const tasks_container= document.querySelector('.tasks');
    let task_item = document.createElement('div');
    task_item.className = 'task_item';
    
    let delete_task_btn = document.createElement('button');
    delete_task_btn.innerHTML = "Delete";
    delete_task_btn.className = 'delete_task';
    delete_task_btn.addEventListener('click', ()=>{
        delete_task(tasks_container, projects_array[projectIndex], taskIndex);
    });

    let task_check = document.createElement('input');
    task_check.setAttribute('type','checkbox');
    task_check.className = 'task_check';
    let taskIndex = projects_array[projectIndex].indexOf(currentTask);
    task_check.addEventListener('click', ()=> {
        if (!edit) {
            task_check.checked = false;
        } else if (task_check.checked == true) {
            projects_array[projectIndex][taskIndex].check = "checked";
            task_item.childNodes.forEach(childElement => {
                childElement.style.textDecoration = "line-through";
            })
            modify_task_btn.style.textDecoration = "none";
            delete_task_btn.style.textDecoration = "none";

        } else {
            projects_array[projectIndex][taskIndex].check = "uncheck";
            task_item.childNodes.forEach(childElement => {
                childElement.style.textDecoration = "none";
            })
        }
    })
    
    let task_name= document.createElement('div');
    task_name.className = 'task_name';
    task_name.innerHTML = get_task_name;
    
    let task_date= document.createElement('div');
    task_date.className = 'task_date';
    task_date.innerHTML = get_task_date;

    let task_note= document.createElement('div');
    task_note.className = 'task_note';
    task_note.innerHTML = get_task_note;

    let modify_task_btn = document.createElement('button');
    modify_task_btn.innerHTML = "Edit";
    modify_task_btn.className = 'modify_task';
    let edit = true;
    modify_task_btn.addEventListener('click', ()=>{
        if (task_check.checked == true) {
            return;
        } else if (edit) {
            modify_task(task_name, task_date, task_note, modify_task_btn);
            edit = false;
        } else {
            save_task(projects_array, projectIndex, taskIndex, task_name, task_date, task_note, modify_task_btn);
            edit = true;
        }
    });

    task_item.appendChild(task_check);
    task_item.appendChild(task_name);
    task_item.appendChild(task_date);
    task_item.appendChild(task_note);
    task_item.appendChild(modify_task_btn);
    task_item.appendChild(delete_task_btn);
  
    if (projects_array[projectIndex][taskIndex].check == "checked") {
        task_check.checked = true;
        task_item.childNodes.forEach(childElement => {
            childElement.style.textDecoration = "line-through";
        })
        modify_task_btn.style.textDecoration = "none";
        delete_task_btn.style.textDecoration = "none";
    } else {
        task_item.childNodes.forEach(childElement => {
            childElement.style.textDecoration = "none";
        })
    }

    tasks_container.appendChild(task_item);
}