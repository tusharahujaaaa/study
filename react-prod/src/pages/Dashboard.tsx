import { useState } from "react";

const Dashboard = () => {
  const [taskList, setTaskList] = useState(["Task 1", "Task 2", "Task 3"]);

  // setTaskList([...taskList, "New Task"]);
  return (
    <>
      <div className="card">
        <h3>Tasks</h3>
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
