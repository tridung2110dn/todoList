import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'

import TodoInput from "../TodoInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function Header (props) {
    let { location } = useHistory();
    const path = location.pathname;

    const { activeTasks, task, handleChange, handleSubmit } = props;
    return (
        <Row className="header px-3 py-3">

            <Col xl={8} md={8}>
                <p className="title"> Todo List </p>
                <p className="number-of-tasks">{activeTasks} active tasks </p>
                <TodoInput task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
            </Col>

            <Col xl={4} md={4} className="nav-bar">
                {/* /todoList/ */}
                <Link to="/" className={path === '/completed' ? "" : "active"}> Active tasks </Link>
                {/* /todoList/completed */}
                <Link to="/completed" className={path === '/completed' ? "active" : ""}> Completed Tasks </Link>
            </Col>
        </Row>
    )

}

export default Header;