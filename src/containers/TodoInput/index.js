import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap'

import './styles.scss';

class TodoInput extends Component {

    render() {
        const { task, handleSubmit, handleChange } = this.props;

        return (
            
            <Form onSubmit={handleSubmit}>
                <Row >
                    <Col xl={8} md={8}>
                        <Form.Control type="text" placeholder="Add to do ..." value={task} onChange={handleChange} />
                    </Col>
                    <Col  xl={4} md={4}>
                        <Button className="btn-submit" variant="primary" type="submit">Add to do</Button>
                    </Col>
                </Row>

            </Form>

        )
    }
}

export default TodoInput;