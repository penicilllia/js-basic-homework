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

toDoList.addTask('Пропылесосить', 3);
toDoList.addTask('Выпить 4 литра воды', 3);
toDoList.addTask('Купить молоко', 5);
toDoList.addTask('Выбросить мусор', 1);
toDoList.addTask('', 10);
toDoList.addTask('Test');

toDoList.deleteTaskById(1);
toDoList.deleteTaskById(15);
toDoList.deleteTaskById('');
toDoList.deleteTaskById();

toDoList.updateParams(3, 'title', 'Выпить 2 литра воды');
toDoList.updateParams(4, 'title', '');
toDoList.updateParams(3, 'priority', 1);
toDoList.updateParams('', 'priority', 1);
toDoList.updateParams(2, '', 100);

toDoList.sortTasks('id', true);
toDoList.sortTasks('id', false);
toDoList.sortTasks('priority', false);
toDoList.sortTasks('priority', true);
toDoList.sortTasks('priority', 123);
toDoList.sortTasks('priority', 'test');
toDoList.sortTasks('prioritet', 'test');

toDoList.deleteTaskById(3);
toDoList.deleteTaskById(5);
toDoList.deleteTaskById(2);
toDoList.deleteTaskById(4);

toDoList.addTask('Выпить 4 литра воды', 3);
toDoList.addTask('Выпить 4 литра воды', 3);

console.log(toDoList);
