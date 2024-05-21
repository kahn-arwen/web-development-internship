document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    const clearButton = document.getElementById("clear");

    

    // armazenar task
    let tasks = [];


    const renderTasks = () => {
        taskList.innerHTML = "";

        //para cada uma
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="delete">×</span>
                <span class="edit">&#9998;</span>
                <input type="checkbox">
                <label>${task.text}</label>
            `;

            //se completo
            if (task.completed) {
                li.classList.add("completed");
                li.querySelector("input[type='checkbox']").checked = true;
            }

            taskList.appendChild(li);

            //deletar
            li.querySelector(".delete").addEventListener("click", () => {
                deleteTask(index);
            });

            // editar
            li.querySelector(".edit").addEventListener("click", () => {
                const newText = prompt("Edit task:", task.text);
                if (newText !== null) {
                    tasks[index].text = newText;
                    renderTasks();
                }
            });
        });
    };

    // adicionar
    const addTask = (text) => {
        tasks.push({ text, completed: false });
        renderTasks();
    };

    // deletar
    const deleteTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };

    // ta concluida??
    const toggleTaskCompletion = (index) => {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    };

    // enviar
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTaskInput = document.getElementById("new-task");
        const text = newTaskInput.value.trim();
        if (text !== "") {
            addTask(text);
            newTaskInput.value = "";
        }
    });

    // deletar
    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            const index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
            deleteTask(index);
        }
    });

    // tarefa concluiida
    taskList.addEventListener("change", (e) => {
        if (e.target.matches("input[type='checkbox']")) {
            const index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
            toggleTaskCompletion(index);
        }
    });

    // limpar tudo
    clearButton.addEventListener("click", () => {
        tasks = [];
        renderTasks();
    });

    // Initial rendering
    renderTasks();
});
