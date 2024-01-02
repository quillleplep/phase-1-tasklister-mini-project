document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskDescripton = document.getElementById('new-task-description').value;
    const newTask = document.createElement('li');
    newTask.taskContent = taskDescripton;
    taskList.appendChild(newTask);
    document.getElementById('new-task-description').value = '';
  });
  // your code here
});
