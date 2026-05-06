import { useState } from "react";
import type { FormEvent } from "react";
import type {
  TaskFormValues,
  TaskPriority,
  TaskStatus,
} from "../../types/task";

type TaskFormProps = {
  taskDetail: (task: TaskFormValues) => void;
  onCancel: () => void;
};

const initialTask: TaskFormValues = {
  title: "",
  description: "",
  dueDate: "",
  startDate: "",
  priority: "Low",
  status: "To Do",
};

const TaskForm = ({ taskDetail, onCancel }: TaskFormProps) => {
  const [task, setTask] = useState<TaskFormValues>(initialTask);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = task.title.trim();

    if (!title) {
      return;
    }

    taskDetail({
      ...task,
      title,
      description: task.description.trim(),
    });
    setTask(initialTask);
  };

  return (
    <aside className="taskForm" aria-label="Create task form">
      <div className="form-header">
        <div>
          <span className="section-kicker">New task</span>
          <h2>Create Task</h2>
        </div>
        <button
          className="icon-button"
          onClick={onCancel}
          type="button"
          aria-label="Close create task form"
        >
          x
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={task.title}
            placeholder="Design review"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={task.description}
            placeholder="Add the key context..."
            rows={4}
            onChange={(e) =>
              setTask({ ...task, description: e.target.value })
            }
          />
        </div>

        <div className="form-grid">
          <div className="formGroup">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={task.startDate}
              onChange={(e) => setTask({ ...task, startDate: e.target.value })}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              value={task.dueDate}
              onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            />
          </div>
        </div>

        <div className="form-grid">
          <div className="formGroup">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              value={task.priority}
              onChange={(e) =>
                setTask({
                  ...task,
                  priority: e.target.value as TaskPriority,
                })
              }
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="formGroup">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={task.status}
              onChange={(e) =>
                setTask({
                  ...task,
                  status: e.target.value as TaskStatus,
                })
              }
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button className="secondary-btn" onClick={onCancel} type="button">
            Cancel
          </button>
          <button className="primary-btn" type="submit">
            Create Task
          </button>
        </div>
      </form>
    </aside>
  );
};

export default TaskForm;
