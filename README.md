# Tickify

Tickify is a modern, accessible, and productivity-focused task management app built with React, Vite, and Tailwind CSS. Organize your life, one task at a time!

> Empower yourself to achieve more—Tickify makes task management simple, effective, and inspiring for everyone!

## Features

- ``Add, Complete, and Delete Tasks`` – Create new tasks, mark them as done, or remove them anytime.
- ``Set Priorities`` – Categorize tasks as High, Medium, or Low to focus on what matters most.
- ``Assign Tasks to Days`` – Plan your week by assigning tasks to specific days.
- ``Set Due Dates`` – Stay on schedule and automatically track overdue tasks.
- ``Filter & Sort`` – Quickly organize tasks by priority, day, due date, or title.
- ``Persistent Storage`` – All tasks are saved in your browser’s localStorage, so your progress is never lost.
- ``Responsive & Accessible`` – Use Tickify seamlessly across devices with a clean, user-friendly interface.

### Upcoming Features
- ``Smart Task Management``: Organize tasks with due dates, priorities, subtasks, tags, attachments, and recurring schedules.
- ``Visual Organization``: Keep track of your tasks with Kanban boards, calendar views, and progress dashboards.
- ``Productivity Boosters``: Use task templates, bulk actions, automations, reminders, and keyboard shortcuts to stay efficient.
- ``Personalization``: Customize themes, enable dark mode, and arrange your dashboard to suit your workflow.
- ``Insights & Analytics``: Monitor task completion, visualize progress, track productivity trends, and optionally log time spent.
- ``Seamless Integration``: Sync tasks with personal calendars and export your data as CSV or PDF.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/SamAlex001/tickify-pub.git
   cd tickify-pub
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

---

## Project Structure

```
tickify-pub/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── ...
```

---

## Technologies Used

- React
- Vite
- Tailwind CSS
- Lucide Icons
- ESLint

---

## Usage
- ``Add a Task``: Use the "Add New Task" form at the top of the page to enter a task title, set a due date, assign a day, and choose a priority. Click "Add Task" to create it.
- ``Complete a Task``: Click the round checkbox on the left of a task card to mark it as complete or incomplete.
- ``Delete a Task``: Click the trash icon on the right of a task card to delete it.
- ``Set Priority & Due Date``: When adding a task, select the priority (High, Medium, Low) and optionally set a due date.
- ``Assign to Day``: When adding a task, select a day of the week to assign the task.
- ``Filter & Sort Tasks``: Use the "Filter & Sort Tasks" bar to filter by priority, assigned day, or sort by creation date, due date, priority, or title.
- ``View Task Stats``: The dashboard at the top shows total, completed, pending, high-priority, and overdue tasks, along with a progress bar.

## Accessibility

Tickify is built with accessibility in mind, using semantic HTML, ARIA labels, and keyboard-friendly controls.

---

## Contributions
Contributions are welcome!
