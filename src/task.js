
function createProject() {
    let project = [];
    let projects_list = JSON.parse(localStorage.getItem("projects_list"));
    projects_list.push(project);
    localStorage.setItem("projects_list", JSON.stringify(projects_list));
}

class task {
    constructor(title, due_date, note, check) {
        this.title = title,
        this.due_date = due_date,
        this.note = note,
        this.check = "uncheck"
    }
}

function createTask(project, title, due_date, note, check="uncheck") {
    let new_task = new task(title, due_date, note, check);
    let project_array = JSON.parse(localStorage.getItem("projects_list"));
    project_array[project].push(new_task);
    let obj = {
        new_task: new_task,
        project_array: project_array
    }
    localStorage.setItem("projects_list", JSON.stringify(project_array));
    return obj;
}

export {task, createProject, createTask};