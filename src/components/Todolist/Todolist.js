import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
class Todolist extends Component {
    createTasks = item => {
        return (
            <ListGroup.Item key={item.key}>{item.text}</ListGroup.Item>
        )
    }
    render() {
        const {entries} = this.props;
        return (
            <Card>
                <Card.Header>Todo List</Card.Header>
                <Card.Body>
                    <ListGroup>
                        {entries.map(this.createTasks)}
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
    
}

export default Todolist;