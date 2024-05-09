const toDoList = {
    tasks: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 2
        }
    ],
    addTask: function(title, priority) {
        if (title && priority) {
            const id = this.tasks.slice(-1)[0].id + 1;
    
            this.tasks.push({
                title,
                id,
                priority
            });
        }
    },
    deleteTaskById: function(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    updateNameOrPriority: function(taskId, newParameter) {
        if (taskId && newParameter) {
            const task = this.tasks.find(task => task.id === taskId);
            
            if (task && typeof(newParameter) === 'string') {
                task.title = newParameter;
            } else if (task && typeof(newParameter) === 'number') {
                task.priority = newParameter;
            }
        }
    },
    sortTasks: function(sortParameter, increasing) {
        if (sortParameter.toLowerCase() === 'id') {
            this.tasks.sort((a, b) => a.id > b.id ? increasing : !increasing);
        } else if (sortParameter.toLowerCase() === 'priority') {
            this.tasks.sort((a, b) => a.priority > b.priority ? increasing : !increasing);
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

toDoList.updateNameOrPriority(3, 'Выпить 2 литра воды');
toDoList.updateNameOrPriority(4, '');
toDoList.updateNameOrPriority(3, 1);
toDoList.updateNameOrPriority('', 1);

toDoList.sortTasks('id', true);
toDoList.sortTasks('id', false);
toDoList.sortTasks('priority', false);
toDoList.sortTasks('priority', true);
toDoList.sortTasks('priority', 123);
toDoList.sortTasks('priority', 'test');
toDoList.sortTasks('prioritet', 'test');

console.log(toDoList);
