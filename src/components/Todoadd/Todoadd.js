import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
class Todoadd extends React.Component {
    constructor(props) {
        super(props);
        this.taskInput = React.createRef();
    }
    
    handleInput = e => {
        e.preventDefault()
        // const taskName = this.refs.taskInput.value;
        // this.props.addItem(taskName);
        // // reset and focus again on input form
        // this.refs.taskInput.value = ''
        // this.refs.taskInput.focus()
       
        const taskName = this.taskInput.current.value;
       // console.log(taskName);
        this.props.addItem(taskName);
        //reset and focus again on input form
        this.taskInput.current.value='';
        this.taskInput.current.focus();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleInput}>
                    <InputGroup size="sm" className="mb-3">
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Task"
                            ref={this.taskInput} />
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </InputGroup>
                </Form>
            </div>
        );
    }
}

export default Todoadd;