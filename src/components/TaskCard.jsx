import React from 'react';
import { Check, Trash2, Calendar, Flag, Clock } from 'lucide-react';

export default function TaskCard({ task, onToggleComplete, onDeleteTask }) {
    const priorityColors = {
        high: 'border-l-red-500 bg-red-50',
        medium: 'border-l-orange-500 bg-orange-50',
        low: 'border-l-green-500 bg-green-50',
    };

    const priorityIcons = {
        high: 'text-red-600',
        medium: 'text-orange-600',
        low: 'text-green-600',
    };

    const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div
            className={`bg-white rounded-lg shadow-md border-l-4 p-4 transition-all duration-300 hover:shadow-lg ${priorityColors[task.priority]
                } ${task.completed ? 'opacity-75' : ''} ${isOverdue ? 'ring-2 ring-red-200' : ''}`}
            role="article"
            aria-label={`Task: ${task.title}`}
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                    <button
                        onClick={() => onToggleComplete(task.id)}
                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${task.completed
                                ? 'bg-green-500 border-green-500 text-white'
                                : 'border-gray-300 hover:border-green-400'
                            }`}
                        aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                        {task.completed && <Check className="w-4 h-4" />}
                    </button>

                    <div className="flex-1">
                        <h3 className={`font-medium text-gray-800 mb-2 ${task.completed ? 'line-through text-gray-500' : ''
                            }`}>
                            {task.title}
                        </h3>

                        <div className="flex flex-wrap gap-3 text-sm">
                            {task.dueDate && (
                                <div className={`flex items-center gap-1 ${isOverdue ? 'text-red-600' : 'text-gray-600'
                                    }`}>
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatDate(task.dueDate)}</span>
                                    {isOverdue && <Clock className="w-4 h-4" />}
                                </div>
                            )}

                            <div className={`flex items-center gap-1 ${priorityIcons[task.priority]}`}>
                                <Flag className="w-4 h-4" />
                                <span className="capitalize">{task.priority}</span>
                            </div>

                            {task.assignedDay && (
                                <div className="text-blue-600">
                                    <span className="font-medium">{task.assignedDay}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => onDeleteTask(task.id)}
                    className="flex-shrink-0 w-8 h-8 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 flex items-center justify-center transition-all duration-200"
                    aria-label={`Delete task: ${task.title}`}
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}