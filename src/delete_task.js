export function delete_task(parent, array, index) {
    array.splice(index, 1);
    if (parent.hasChildNodes()) {
        parent.removeChild(parent.children[index]);
    }
}