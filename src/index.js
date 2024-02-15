//use this file for DOM
import './style.css'
import {validate, task_on_screen} from './project.js';

const projectContainer = document.querySelector('.projectContainer');
const submitProject = document.querySelector('.submitProject');
const createTask = document.querySelector('.createTask');
const submitTask = document.querySelector('.submitTask');


submitProject.addEventListener('click', ()=>{
    validate();
});

submitTask.addEventListener('click', task_on_screen);