import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import "./TaskTable.css";

function TaskTable({ tasks }) {
  return (
    <div className="userHomeTable">
      <div className="userHomeTableTitle">Tasks</div>
      <Table borderless className="userHomeTableWrapper">
        <thead className="userHomeTableThead">
          <tr className="userHomeTableTr">
            <th className="userHomeTableTh">Task ID</th>
            <th className="userHomeTableTh">Company Name</th>
            <th className="userHomeTableTh">Assigned To</th>
            <th className="userHomeTableTh">Duration</th>
            <th className="userHomeTableTh">Task Status</th>
          </tr>
        </thead>
        <tbody className="userHomeTbody">
          {tasks.map((task) => (
            <tr key={task.orderId} className="userHomeTableTr">
              <td className="userHomeTableTd">
                <Link to={`/taskDetails/${task.orderId}`}>{task.orderId}</Link>
              </td>
              <td className="userHomeTableTd">Murli</td>
              <td className="userHomeTableTd">{task.assignedTo}</td>
              <td className="userHomeTableTd">0</td>
              <td className="userHomeTableTd">{task.orderStatus}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TaskTable;
