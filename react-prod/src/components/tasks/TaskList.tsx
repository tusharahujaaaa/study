
import TaskItem from "./TaskItem";
import type { Task } from "../../types/task";

type TaskListProps = {
  tasks: Task[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  if (!tasks.length) {
    return (
      <div className="empty-state">
        <h4>No tasks yet</h4>
        <p>Create a task to start filling your board.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
