import {createProject, createTask } from './task.js';
import { task_content_creator } from "./task_content.js";
import { removeAllChildNodes } from "./removeChildNodes.js";

const projectNameInput = document.querySelector('.project_name_input');
const projectList = document.querySelector('.projectList');

const task_name_input = document.querySelector('#task_name_input');
const task_date_input = document.querySelector('#task_date_input');
const task_note_input = document.querySelector('#task_note_input');
const tasks_container= document.querySelector('.tasks');


let current_project_id;
let previous_project_id;
function default_project_build(project_name) {
    createProject();
    removeAllChildNodes(tasks_container);
    
    let project_id_counter = JSON.parse(localStorage.getItem("id_counter"));
    let projects_list = JSON.parse(localStorage.getItem("projects_list"));

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
    localStorage.setItem("id_counter", JSON.stringify([project_id_counter]));
    return current_project_id;
}

function default_task_build(task_name, task_date, task_note) {
    let new_task_array = createTask(current_project_id, task_name, task_date, task_note);
    task_content_creator(new_task_array.project_array, task_name, task_date, task_note, current_project_id, new_task_array.new_task);
}

function project_on_screen() {
    if (projectNameInput.value == "") {
        return;
    } else {
        default_project_build(projectNameInput.value);
        getProjectNames = JSON.parse(localStorage.getItem("projectNames"));
        getProjectNames.push(projectNameInput.value);
        localStorage.setItem("projectNames", JSON.stringify(getProjectNames));
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


//localStorage functionality
let getProjectNames = [];
if (!localStorage.getItem("projectNames")) {
    getProjectNames.push("Important");
    localStorage.setItem("projectNames", JSON.stringify(getProjectNames));
    localStorage.setItem("projects_list", JSON.stringify([]));
    localStorage.setItem("id_counter", JSON.stringify(0));
    default_project_build("Important");
    default_task_build("Workout", "2024-02-18", "Leg day");
    } else {
    localStorage.setItem("id_counter", JSON.stringify(0));
    let getProjectNames = JSON.parse(localStorage.getItem("projectNames"));
    for (let i = 0; i < getProjectNames.length; i++) {
       default_project_build(getProjectNames[i]);
       let projects_list = JSON.parse(localStorage.getItem("projects_list"));
       //after reload this displays tasks associated with the last project displayed
       projects_list[i].forEach(element => {
        task_content_creator(projects_list, element.title, element.due_date, element.note, current_project_id, element);
    });
    }
}

export {project_on_screen, task_on_screen};