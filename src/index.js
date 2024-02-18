import './style.css'
import {project_on_screen, task_on_screen} from './project.js';

const submitProject = document.querySelector('.submitProject');
const submitTask = document.querySelector('.submitTask');


submitProject.addEventListener('click', project_on_screen);

submitTask.addEventListener('click', task_on_screen);