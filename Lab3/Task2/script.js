// Select elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Add task
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  const taskText = input.value.trim();
  if (taskText === "") return;

  // Create new list item
  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Done checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("done");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  // Append elements
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // Clear input
  input.value = "";
});
