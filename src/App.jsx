import React, { useState, useMemo } from 'react';
import { CheckSquare, Sparkles } from 'lucide-react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { calculateTaskStats, filterTasks, sortTasks } from './utils/taskUtils';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import TaskStats from './components/TaskStats';
import FilterBar from './components/FilterBar';

function App() {
  const [tasks, setTasks] = useLocalStorage('taskflow-tasks', []);
  const [priorityFilter, setPriorityFilter] = useState('');
  const [dayFilter, setDayFilter] = useState('');
  const [sortBy, setSortBy] = useState('created');

  const addTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: crypto.randomUUID(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredAndSortedTasks = useMemo(() => {
    const filtered = filterTasks(tasks, priorityFilter, dayFilter);
    return sortTasks(filtered, sortBy);
  }, [tasks, priorityFilter, dayFilter, sortBy]);

  const stats = useMemo(() => calculateTaskStats(tasks), [tasks]);

  const incompleteTasks = filteredAndSortedTasks.filter(task => !task.completed);
  const completedTasks = filteredAndSortedTasks.filter(task => task.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
              <CheckSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TaskFlow
            </h1>
            <Sparkles className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-gray-600 text-lg">
            Organize your life, one task at a time
          </p>
        </header>

        {/* Stats Dashboard */}
        <TaskStats stats={stats} />

        {/* Task Form */}
        <TaskForm onAddTask={addTask} />

        {/* Filter Bar */}
        <FilterBar
          priorityFilter={priorityFilter}
          dayFilter={dayFilter}
          sortBy={sortBy}
          onPriorityFilterChange={setPriorityFilter}
          onDayFilterChange={setDayFilter}
          onSortByChange={setSortBy}
        />

        {/* Tasks List */}
        <div className="space-y-6">
          {/* Pending Tasks */}
          {incompleteTasks.length > 0 && (
            <section aria-label="Pending tasks">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                Pending Tasks ({incompleteTasks.length})
              </h2>
              <div className="space-y-4">
                {incompleteTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggleComplete={toggleTaskComplete}
                    onDeleteTask={deleteTask}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Completed Tasks */}
          {completedTasks.length > 0 && (
            <section aria-label="Completed tasks">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Completed Tasks ({completedTasks.length})
              </h2>
              <div className="space-y-4">
                {completedTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggleComplete={toggleTaskComplete}
                    onDeleteTask={deleteTask}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Empty State */}
          {filteredAndSortedTasks.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckSquare className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                No tasks found
              </h3>
              <p className="text-gray-500">
                {tasks.length === 0
                  ? "Create your first task to get started!"
                  : "Try adjusting your filters to see more tasks."}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            TaskFlow - Built with accessibility and productivity in mind
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;