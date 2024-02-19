import { projects_list, createProject, createTask } from './task.js';
import { task_content_creator } from "./task_content.js";
import { removeAllChildNodes } from "./removeChildNodes.js";

const projectNameInput = document.querySelector('.project_name_input');
const projectList = document.querySelector('.projectList');

const task_name_input = document.querySelector('#task_name_input');
const task_date_input = document.querySelector('#task_date_input');
const task_note_input = document.querySelector('#task_note_input');
const tasks_container= document.querySelector('.tasks');


let project_id_counter = 0;
let current_project_id;
let previous_project_id;
function default_project_build(project_name) {
    createProject();
    removeAllChildNodes(tasks_container);
    

    let newProject = document.createElement('div');
    newProject.className = 'project';
    newProject.setAttribute('id', project_id_counter.toString());
    newProject.innerHTML = project_name;
    projectList.childNodes.forEach(element => {
        element.style.borderStyle = "none";
    })
    newProject.style.borderStyle = "solid";
    newProject.style.borderColor = "black";

    previous_project_id = project_id_counter;
    current_project_id = project_id_counter;
    newProject.addEventListener('click', (event)=>{      
        projectList.childNodes.forEach(element => {
            element.style.borderStyle = "none";
        })
        newProject.style.borderStyle = "solid";
        newProject.style.borderColor = "black";
        
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
    return current_project_id;
}

function default_task_build(task_name, task_date, task_note) {
    let new_task = createTask(current_project_id, task_name, task_date, task_note);
    task_content_creator(projects_list, task_name, task_date, task_note, current_project_id, new_task);
}

default_project_build("Important");
default_task_build("Workout", "18/02/2024", "Leg day");

function project_on_screen() {
    if (projectNameInput.value == "") {
        return;
    } else {
        default_project_build(projectNameInput.value);
        projectNameInput.value = "";
    }
}

function task_on_screen() {
    if (!task_name_input.value || !task_date_input.value) {
        return;
    } else {
        default_task_build(task_name_input.value, task_date_input.value, task_note_input.value);
        task_name_input.value = "";
        task_date_input.value = "";
        task_note_input.value = "";
    }
}


export {project_on_screen, task_on_screen};