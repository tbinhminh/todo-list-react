import React, { Component } from 'react';
import './Todolist.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class Todolist extends Component {
    createTasks = item => {
        const {handleDelete} = this.props;
        return (
            <ListGroup.Item key={item.key}  className="d-flex justify-content-between" 
            onClick={()=>handleDelete(item.key)} 
            >
                <div>
                    <div className="task">
                        {item.text}
                    </div>
                    <div className="dateTask">
                        {item.date}
                    </div>
                </div>
                <div>
                   <span> <i className="far fa-edit mr-3"></i></span>
                    <span onClick={this.props.handleDelete}><i  className="far fa-trash-alt"></i></span>
                </div>
            </ListGroup.Item>
        )
    }
    render() {
        const {entries,clearList} = this.props;
        return (
            <Card>
                <Card.Header className="text-center font-weight-bold">Todo List</Card.Header>
                <Card.Body>
                    <ListGroup>
                        {entries.map(this.createTasks)}
                    </ListGroup>
                </Card.Body>
                <Button className="mt-5" variant="danger" type="button" style={{width: "100%"}} onClick={clearList}>
                    Clear all list
                 </Button>
            </Card>
        );
    }
    
}

export default Todolist;