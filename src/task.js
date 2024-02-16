import { projectList } from "./project";

// let projects_list = [[task1,task2,task3],[],[]...];
let projects_list = [];

function createProject() {
    let project = [];
    projects_list.push(project);
}

class task {
    constructor(title, due_date, note, check) {
        this.title = title,
        this.due_date = due_date,
        this.note = note,
        this.check = "uncheck"
    }
}

function createTask(project, title, due_date, note, check) {
    let new_task = new task(title, due_date, note, check);
    projects_list[project].push(new_task);
    return new_task;
}

export {projects_list, task, createProject, createTask};