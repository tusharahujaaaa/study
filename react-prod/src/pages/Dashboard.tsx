import { useState } from "react";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import type { Task, TaskFormValues, TaskStatus } from "../types/task";

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Prepare product brief",
    description: "Outline the launch priorities and blockers for the team.",
    startDate: "2026-05-06",
    dueDate: "2026-05-08",
    priority: "Medium",
    status: "To Do",
  },
  {
    id: 2,
    title: "Review dashboard copy",
    description: "Tighten labels and remove anything that slows scanning.",
    startDate: "2026-05-05",
    dueDate: "2026-05-07",
    priority: "High",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Archive completed notes",
    description: "Move finished notes into the weekly wrap-up list.",
    startDate: "2026-05-02",
    dueDate: "2026-05-04",
    priority: "Low",
    status: "Done",
  },
];

const getStatusCount = (tasks: Task[], status: TaskStatus) =>
  tasks.filter((task) => task.status === status).length;

const Dashboard = () => {
  const [taskList, setTaskList] = useState<Task[]>(initialTasks);
  const [showForm, setShowForm] = useState(false);

  const completedTasks = getStatusCount(taskList, "Done");
  const inProgressTasks = getStatusCount(taskList, "In Progress");
  const highPriorityTasks = taskList.filter(
    (task) => task.priority === "High",
  ).length;
  const completionRate = taskList.length
    ? Math.round((completedTasks / taskList.length) * 100)
    : 0;

  const getTask = (task: TaskFormValues) => {
    setTaskList((currentTasks) => [
      {
        ...task,
        id: Date.now(),
      },
      ...currentTasks,
    ]);
    setShowForm(false);
  };

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <div>
          <span className="section-kicker">Workspace overview</span>
          <h1>Task Board</h1>
        </div>
        <button
          className="add-task-btn"
          onClick={() => setShowForm((isVisible) => !isVisible)}
          type="button"
          aria-expanded={showForm}
        >
          <span aria-hidden="true">{showForm ? "-" : "+"}</span>
          {showForm ? "Close Form" : "Create Task"}
        </button>
      </div>

      <div className="stats-grid" aria-label="Task summary">
        <div className="metric-card">
          <span>Total</span>
          <strong>{taskList.length}</strong>
        </div>
        <div className="metric-card">
          <span>In Progress</span>
          <strong>{inProgressTasks}</strong>
        </div>
        <div className="metric-card">
          <span>High Priority</span>
          <strong>{highPriorityTasks}</strong>
        </div>
        <div className="metric-card">
          <span>Complete</span>
          <strong>{completionRate}%</strong>
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="task-panel">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Current workload</span>
              <h3>Tasks</h3>
            </div>
            <span className="task-count">{taskList.length} items</span>
          </div>
          <TaskList tasks={taskList} />
        </section>

        {showForm && (
          <TaskForm taskDetail={getTask} onCancel={() => setShowForm(false)} />
        )}
      </div>
    </section>
  );
};

export default Dashboard;
