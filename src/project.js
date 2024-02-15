import {projects_list, task, createProject, createTask} from './task.js';

const projectNameInput = document.querySelector('.project_name_input');
const projectList = document.querySelector('.projectList');
const container = document.querySelector('.container');

const task_form = document.querySelector('#task_form');
const task_name_input = document.querySelector('#task_name_input');
const task_date_input = document.querySelector('#task_date_input');
const task_note_input = document.querySelector('#task_note_input');
const tasks_container= document.querySelector('.tasks');


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let project_id_counter = 0;

let current_project_id;
let previous_project_id;

// this creates a new project and gives an id to it
function validate() {
    if (projectNameInput.value == "") {
        return;
    } else {
        createProject();
        removeAllChildNodes(tasks_container);

        let newProject = document.createElement('div');
        newProject.className = 'project';
        newProject.setAttribute('id', project_id_counter.toString());
        newProject.innerHTML = projectNameInput.value;
        projectNameInput.value = "";
        
        previous_project_id = project_id_counter;
        current_project_id = project_id_counter;
        newProject.addEventListener('click', (event)=>{
            console.log(projects_list);

            previous_project_id = current_project_id;
            current_project_id = parseInt(event.target.id);
            if (previous_project_id == current_project_id) {
                return;
            } else {
                removeAllChildNodes(tasks_container);
                //create associated list of tasks and show them on screen
                projects_list[current_project_id].forEach(element => {
                    task_content_creator(element.title, element.due_date, element.note);
                });
                return current_project_id;
            }
        });
        projectList.appendChild(newProject);
        project_id_counter++;
    }
    return current_project_id;
}
            
function task_on_screen() {
    if (!task_name_input.value|| !task_date_input.value) {
        return;
    } else {
        createTask(current_project_id, task_name_input.value, task_date_input.value, task_note_input.value);
        task_content_creator(task_name_input.value, task_date_input.value, task_note_input.value);
    }
}

function task_content_creator(get_task_name, get_task_date, get_task_note) {
    let task_item = document.createElement('div');
    task_item.className = 'task_item';
    
    let  task_name= document.createElement('div');
    task_name.className = 'task_name';
    task_name.innerHTML = get_task_name;
    
    let  task_date= document.createElement('div');
    task_date.className = 'task_date';
    task_date.innerHTML = get_task_date;

    let  task_note= document.createElement('div');
    task_note.className = 'task_note';
    task_note.innerHTML = get_task_note;

    task_item.appendChild(task_name);
    task_item.appendChild(task_date);
    task_item.appendChild(task_note);

    tasks_container.appendChild(task_item);
}



export {validate, task_on_screen};