'use strict';

const toDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 2
        }
    ],
    addTask(title, priority) {
        if (title && priority) {
            let id = 0;

            if (this.tasks.length) {
                id = this.tasks.reduce((biggestId, task) => biggestId > task.id ? biggestId : task.id, 0);
            }

            this.tasks.push({
                title,
                id: ++id,
                priority
            });
        }
    },
    deleteTaskById(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    updateParams(taskId, typeOfNewParameter, newParameter) {
        if (taskId && typeOfNewParameter && newParameter) {
            const task = this.tasks.find(task => task.id === taskId);
            
            task[typeOfNewParameter] = newParameter;
        }
    },
    sortTasks(sortParameter, increasing) {
        if (sortParameter in this.tasks[0]) {
            this.tasks.sort((a, b) => a[sortParameter] > b[sortParameter] ? increasing : !increasing);
        }
    }
}

const newTask = {
    tasks: [
        {
            id: 1,
            name: 'test',
            description: 'Описание',
            order: 0
        }
    ],
    addTask(name, description, order) {
        if (name && description && order) {
            let id = 0;

            if (this.tasks.length) {
                id = this.tasks.reduce((biggestId, task) => biggestId > task.id ? biggestId : task.id, 0);
            }

            this.tasks.push({
                id: ++id,
                name,
                description,
                order
            });
        }
        
    }
}

newTask.addTask('Купить BMW X5', 'Мне нужна новая машина', 1);
newTask.addTask('Уборка', 'Нужно вынести мусор, помыть посуду', 4);
newTask.addTask('', '', 0);

const deleteTaskByIdFromNewTask = toDoList.deleteTaskById.bind(newTask);
const updateParamsInNewTask = toDoList.updateParams.bind(newTask);
const sortTasksNewTask = toDoList.sortTasks.bind(newTask);

deleteTaskByIdFromNewTask(1);
deleteTaskByIdFromNewTask();

updateParamsInNewTask(3, 'name', 'Уборка на даче');
updateParamsInNewTask(3, 'description', 'Помыть посуду, собрать мусор');
updateParamsInNewTask(3, '', '');

sortTasksNewTask('id', false);
sortTasksNewTask('description', true);

console.log(newTask);
