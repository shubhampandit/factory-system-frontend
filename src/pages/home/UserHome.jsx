import React, { useEffect, useState } from "react";
import "./UserHome.css";
import TaskService from "../../service/TaskService";
import TaskTable from "../../components/taskTable/TaskTable";
import PieChartWidget from "../../components/pieChart/PieChartWidget";

function UserHome({ currentUser }) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log(currentUser);
    let user = currentUser.userName;
    TaskService.getAssignedTasks(user)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="userHome">
      <div className="userHomeWrapper">
        <div className="userHomeTopContainer">
          <TaskTable tasks={tasks} />
          <PieChartWidget />
        </div>
      </div>
    </div>
  );
}

export default UserHome;
