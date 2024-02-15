import {projects_list, task, createProject, createTask} from './task.js';

const projectNameInput = document.querySelector('.project_name_input');
const projectList = document.querySelector('.projectList');
const container = document.querySelector('.container');

const task_form = document.querySelector('#task_form');
const task_name = document.querySelector('#task_name');
const task_date = document.querySelector('#task_date');
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
                    let task_item = document.createElement('div');
                    task_item.className = 'task_item';
                    task_item.innerHTML = element.title.toString();
                    tasks_container.appendChild(task_item);
                });
                return current_project_id;
            }
        });
        projectList.appendChild(newProject);
        project_id_counter++;
    }
    return current_project_id;
}
            
            
//important: when task form is submitted take the values and store them in projects_list[associated ID NOT project_id_counter]
function task_on_screen() {
    createTask(current_project_id, task_name.value);

    let task_item = document.createElement('div');
    task_item.className = 'task_item';
    task_item.innerHTML = task_name.value.toString();
    tasks_container.appendChild(task_item);
}

//projects list listener => get id, store it => pass it to task input listener  => create tasks in the right project
//                                           => show associated tasks


export {validate, task_on_screen};