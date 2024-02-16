export function task_content_creator(projects_array, get_task_name, get_task_date, get_task_note, projectIndex, currentTask) {
    const tasks_container= document.querySelector('.tasks');
    let task_item = document.createElement('div');
    task_item.className = 'task_item';
    
    let  task_check= document.createElement('input');
    task_check.setAttribute('type','checkbox');
    task_check.setAttribute('id','task_check');
    let taskIndex = projects_array[projectIndex].indexOf(currentTask);
    if (projects_array[projectIndex][taskIndex].check == "checked") {
        task_check.checked = true;
        task_item.style.textDecoration = "line-through";
    } else {
        task_item.style.textDecoration = "none";
    }
    task_check.addEventListener('click', ()=> {
        if (task_check.checked == true) {
            projects_array[projectIndex][taskIndex].check = "checked";
            task_item.style.textDecoration = "line-through";
        } else {
            projects_array[projectIndex][taskIndex].check = "uncheck";
            task_item.style.textDecoration = "none";

        }
    })
    
    let  task_name= document.createElement('div');
    task_name.className = 'task_name';
    task_name.innerHTML = get_task_name;
    
    let  task_date= document.createElement('div');
    task_date.className = 'task_date';
    task_date.innerHTML = get_task_date;

    let  task_note= document.createElement('div');
    task_note.className = 'task_note';
    task_note.innerHTML = get_task_note;
    
    task_item.appendChild(task_check);
    task_item.appendChild(task_name);
    task_item.appendChild(task_date);
    task_item.appendChild(task_note);

    tasks_container.appendChild(task_item);
}