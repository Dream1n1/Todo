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
    project.push(new task(title, due_date, note, check));
}