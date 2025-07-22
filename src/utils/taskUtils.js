export const calculateTaskStats = (tasks) => {
    const now = new Date();
    const today = now.toDateString();

    return {
        total: tasks.length,
        completed: tasks.filter(task => task.completed).length,
        pending: tasks.filter(task => !task.completed).length,
        highPriority: tasks.filter(task => task.priority === 'high' && !task.completed).length,
        overdue: tasks.filter(task =>
            !task.completed &&
            task.dueDate &&
            new Date(task.dueDate).toDateString() < today
        ).length,
    };
};

export const filterTasks = (tasks, priorityFilter, dayFilter) => {
    return tasks.filter(task => {
        const matchesPriority = !priorityFilter || task.priority === priorityFilter;
        const matchesDay = !dayFilter ||
            (dayFilter === 'unassigned' ? !task.assignedDay : task.assignedDay === dayFilter);

        return matchesPriority && matchesDay;
    });
};

export const sortTasks = (tasks, sortBy) => {
    const sortedTasks = [...tasks];

    switch (sortBy) {
        case 'dueDate':
            return sortedTasks.sort((a, b) => {
                if (!a.dueDate && !b.dueDate) return 0;
                if (!a.dueDate) return 1;
                if (!b.dueDate) return -1;
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            });

        case 'priority':
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return sortedTasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);

        case 'title':
            return sortedTasks.sort((a, b) => a.title.localeCompare(b.title));

        case 'created':
        default:
            return sortedTasks.sort((a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
    }
};