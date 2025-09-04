const form = document.getElementById("new-task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

function createTaskItem(text){
    const li = document.createElement("li");
    li.textContent = text;

    const del = document.createElement("button");
    del.type = "button";
    del.textContent = "X";
    del.className = "delete-btn";

    // clicking thw whole <li> toggles "completed"
li.addEventListener("click", () => li.classList.toggle("completed") );

// clicking the delete button removes the <li>
del.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent the <li> click event
    li.remove();

});
 li .appendChild(del);
    return li;
}
 
function addTask() {
  const text = input.value.trim(); // read and remove extra spaces
  if (!text) return;               // do nothing if empty

  const item = createTaskItem(text); // make the <li>
  list.appendChild(item);            // add it to the visible list

  input.value = ''; // clear the input
  input.focus();    // put cursor back in the input for the next task
}

document.getElementById('add-btn').addEventListener('click', addTask);

// allow Enter to add the task too; prevent form from reloading the page
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
});