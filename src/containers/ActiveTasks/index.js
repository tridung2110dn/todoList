import React, { Component } from 'react';
import { FaRegCheckCircle, FaTrashAlt, FaCircleNotch } from 'react-icons/fa'
import { Row, Col } from 'react-bootstrap'
import './styles.scss';

class ActiveTasks extends Component {

    render() {
        const { tasks, completedTask, deleteTask, returnTask } = this.props;

        return (
            <Row className="active-tasks px-3 py-3">
                <Col className="tasks">
                    <ul className="list-group">
                        {tasks.map(task =>
                            <li className="list-group-item active-task" key={task.id}>
                                {!task.isCompleted  ? 
                                <FaRegCheckCircle className="check-icon" onClick={() => completedTask(task.id)} />
                                :
                                <FaCircleNotch className="return-icon" onClick={() => returnTask(task.id)}/>
                                }
                                <span> {task.task} </span>
                                <FaTrashAlt className="trash-icon" onClick={() => deleteTask(task.id, task.isCompleted)}/>
                            </li>
                        )}

                    </ul>
                </Col>
            </Row>
        )
    }
}

export default ActiveTasks;