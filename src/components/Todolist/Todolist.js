import React, { Component } from 'react';
import './Todolist.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Todoitems from '../Todoitems/Todoitems';

class Todolist extends Component {
    render() {
        const {entries,clearList,handleDelete, handleEdit} = this.props;
        return (
            <Card>
                <Card.Header className="text-center font-weight-bold">Todo List</Card.Header>
                <Card.Body>
                    <ListGroup>
                        {entries.map(item => {
                            return <Todoitems key= {item.key} title={item.text} date={item.date}
                             handleDelete ={()=>handleDelete(item.key)}
                             handleEdit ={()=>handleEdit(item.key)}/>
                        })}
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