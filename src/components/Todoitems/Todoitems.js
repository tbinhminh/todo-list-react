import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
class Todoitems extends Component {
    render() {
        const {title, date,handleDelete,handleEdit} = this.props;
        return (
                <ListGroup.Item className="d-flex justify-content-between">
                <div>
                    <div className="task">
                        {title}
                    </div>
                    <div className="dateTask">
                        {date}
                    </div>
                </div>
                <div>
                    <span onClick={handleEdit}> <i className="far fa-edit mr-3"></i></span>
                    <span onClick={handleDelete}><i className="far fa-trash-alt"></i></span>
                </div>
            </ListGroup.Item>
        );
    }
}

export default Todoitems;