import { projects_list, createProject, createTask } from './task.js';
import { task_content_creator } from "./task_list_builder.js";

const projectNameInput = document.querySelector('.project_name_input');
const projectList = document.querySelector('.projectList');

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
            previous_project_id = current_project_id;
            current_project_id = parseInt(event.target.id);
            if (previous_project_id == current_project_id) {
                return;
            } else {
                removeAllChildNodes(tasks_container);
                //create associated list of tasks and show them on screen
                projects_list[current_project_id].forEach(element => {
                    task_content_creator(projects_list, element.title, element.due_date, element.note, current_project_id, element);
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
        let new_task = createTask(current_project_id, task_name_input.value, task_date_input.value, task_note_input.value);
        task_content_creator(projects_list, task_name_input.value, task_date_input.value, task_note_input.value, current_project_id, new_task);
    }
}


export {validate, task_on_screen};