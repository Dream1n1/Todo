import './style.css'
import {validate, task_on_screen} from './project.js';

const submitProject = document.querySelector('.submitProject');
const submitTask = document.querySelector('.submitTask');


submitProject.addEventListener('click', ()=>{
    validate();
});

submitTask.addEventListener('click', task_on_screen);