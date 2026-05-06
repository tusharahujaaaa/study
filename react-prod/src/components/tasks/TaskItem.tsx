
import type { Task } from "../../types/task";

type TaskItemProps = {
  task: Task;
};

const formatDate = (value: string) => {
  if (!value) {
    return "No date";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(`${value}T00:00:00`));
};

const getClassName = (value: string) => value.toLowerCase().replace(/\s+/g, "-");

const TaskItem = ({ task }: TaskItemProps) => {
  const priorityClassName = getClassName(task.priority);
  const statusClassName = getClassName(task.status);

  return (
    <article className={`task-item task-item--${statusClassName}`}>
      <div className="task-item__header">
        <div>
          <span className="task-item__status">{task.status}</span>
          <h4>{task.title}</h4>
        </div>
        <span className={`priority-badge priority-badge--${priorityClassName}`}>
          {task.priority}
        </span>
      </div>

      <p>{task.description || "No description added."}</p>

      <div className="task-meta">
        <span>
          <strong>Start</strong>
          {formatDate(task.startDate)}
        </span>
        <span>
          <strong>Due</strong>
          {formatDate(task.dueDate)}
        </span>
      </div>
    </article>
  );
};

export default TaskItem;
