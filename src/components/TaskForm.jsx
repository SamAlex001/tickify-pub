import React, { useState } from 'react';
import { Plus, Calendar, Flag } from 'lucide-react';

export default function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('medium');
    const [assignedDay, setAssignedDay] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onAddTask({
            title: title.trim(),
            dueDate,
            priority,
            assignedDay: assignedDay || undefined,
        });

        setTitle('');
        setDueDate('');
        setPriority('medium');
        setAssignedDay('');
    };

    const priorityColors = {
        high: 'border-red-400 text-red-700 bg-red-50',
        medium: 'border-orange-400 text-orange-700 bg-orange-50',
        low: 'border-green-400 text-green-700 bg-green-50',
    };

    const daysOfWeek = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100"
            aria-label="Add new task form"
        >
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-600" />
                Add New Task
            </h2>

            <div className="space-y-4">
                <div>
                    <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1">
                        Task Title *
                    </label>
                    <input
                        id="task-title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your task..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                        aria-required="true"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="due-date" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Due Date
                        </label>
                        <input
                            id="due-date"
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    <div>
                        <label htmlFor="assigned-day" className="block text-sm font-medium text-gray-700 mb-1">
                            Assign to Day
                        </label>
                        <select
                            id="assigned-day"
                            value={assignedDay}
                            onChange={(e) => setAssignedDay(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                            <option value="">Select a day...</option>
                            {daysOfWeek.map((day) => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                        <Flag className="w-4 h-4" />
                        Priority Level
                    </label>
                    <div className="flex gap-2">
                        {['high', 'medium', 'low'].map((level) => (
                            <button
                                key={level}
                                type="button"
                                onClick={() => setPriority(level)}
                                className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 capitalize ${priority === level
                                        ? priorityColors[level]
                                        : 'border-gray-200 text-gray-600 bg-gray-50 hover:bg-gray-100'
                                    }`}
                                aria-pressed={priority === level}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium flex items-center justify-center gap-2 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    disabled={!title.trim()}
                >
                    <Plus className="w-5 h-5" />
                    Add Task
                </button>
            </div>
        </form>
    );
}