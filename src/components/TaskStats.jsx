import React from 'react';
import { CheckCircle2, Circle, AlertTriangle, Clock } from 'lucide-react';

export default function TaskStats({ stats }) {
    const completionPercentage = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

    const statCards = [
        {
            icon: Circle,
            label: 'Total Tasks',
            value: stats.total,
            color: 'text-blue-600 bg-blue-50',
        },
        {
            icon: CheckCircle2,
            label: 'Completed',
            value: stats.completed,
            color: 'text-green-600 bg-green-50',
        },
        {
            icon: Clock,
            label: 'Pending',
            value: stats.pending,
            color: 'text-orange-600 bg-orange-50',
        },
        {
            icon: AlertTriangle,
            label: 'High Priority',
            value: stats.highPriority,
            color: 'text-red-600 bg-red-50',
        },
    ];

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Overview</h2>

            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-800">{completionPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${completionPercentage}%` }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card) => (
                    <div key={card.label} className="text-center">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-2 ${card.color}`}>
                            <card.icon className="w-6 h-6" />
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{card.value}</div>
                        <div className="text-sm text-gray-600">{card.label}</div>
                    </div>
                ))}
            </div>

            {stats.overdue > 0 && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 text-red-700">
                        <AlertTriangle className="w-5 h-5" />
                        <span className="font-medium">
                            {stats.overdue} overdue task{stats.overdue !== 1 ? 's' : ''} need{stats.overdue === 1 ? 's' : ''} attention
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}