import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./TaskDetailsPage.css";
import TaskService from "../../service/TaskService";

function TaskDetailsPage(props) {
  const { match, history } = props;

  const handleOnTaskStatusChange = (taskStatus) => {
    let orderId = match.params.taskId;
    let taskStatusRequest = {
      orderId: orderId,
      orderStatus: taskStatus,
    };
    TaskService.updateTaskStatus(orderId, taskStatusRequest)
      .then((res) => {
        console.log(res);
        history.push("/userHome");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="taskDetailsPage">
      <div className="taskDetailTitle">Task Detail</div>
      <Container className="mt-3 p-5">
        <Row>
          <Col>
            <Button
              variant="success"
              onClick={() => handleOnTaskStatusChange("In Progress")}
            >
              In Progress
            </Button>
          </Col>
          <Col>
            <Button
              variant="success"
              onClick={() => handleOnTaskStatusChange("In Transit")}
            >
              In Transit
            </Button>
          </Col>
          <Col>
            <Button
              variant="success"
              onClick={() => handleOnTaskStatusChange("Completed")}
            >
              Completed
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TaskDetailsPage;
