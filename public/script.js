document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
  
    addButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          ${taskText}
          <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", (event) => {
      if (event.target.classList.contains("deleteButton")) {
        event.target.parentElement.remove();
      }
    });
  });
  