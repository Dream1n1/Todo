export function modify_task(name, date, note, modify_btn) {
    name.setAttribute('contenteditable', 'true');
    date.setAttribute('contenteditable', 'true');
    note.setAttribute('contenteditable', 'true');

    name.style.color = 'black';
    date.style.color = 'black';
    note.style.color = 'black';

    name.style.backgroundColor = 'white';
    date.style.backgroundColor = 'white';
    note.style.backgroundColor = 'white';

    name.style.padding = '10px 20px';
    date.style.padding = '10px 20px';
    note.style.padding = '10px 20px';
    modify_btn.innerHTML = "Save";
    name.focus()
}

export function save_task(array, firstIndex, secondIndex, name, date, note, modify_btn) {
    name.setAttribute('contenteditable', 'false');
    date.setAttribute('contenteditable', 'false');
    note.setAttribute('contenteditable', 'false');

    name.style.color = '#4d424d';
    date.style.color = '#4d424d';
    note.style.color = '#4d424d';

    name.style.backgroundColor = '#e0e0e0';
    date.style.backgroundColor = '#e0e0e0';
    note.style.backgroundColor = '#e0e0e0';

    name.style.padding = '5px';
    date.style.padding = '5px';
    note.style.padding = '5px';

    modify_btn.innerHTML = "Edit";
    //saving new data in their array
    array[firstIndex][secondIndex].title = name.innerHTML;
    array[firstIndex][secondIndex].due_date = date.innerHTML;
    array[firstIndex][secondIndex].note = note.innerHTML;
}