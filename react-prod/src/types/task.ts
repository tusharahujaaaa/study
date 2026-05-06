export type TaskPriority = "Low" | "Medium" | "High";

export type TaskStatus = "To Do" | "In Progress" | "Done";

export type TaskFormValues = {
  title: string;
  description: string;
  dueDate: string;
  startDate: string;
  priority: TaskPriority;
  status: TaskStatus;
};

export type Task = TaskFormValues & {
  id: number;
};
