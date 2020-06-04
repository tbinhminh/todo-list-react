import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Todolist from './components/Todolist/Todolist';
import Todoadd from './components/Todoadd/Todoadd';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  constructor() {
    super();
    this.state ={
      items: [],
      id :uuidv4(),
      editStatus : false
    }
  }
  addItem = (taskName) => { //truyen  call back addItem vao component Todoadd
    let d = new Date();
    const newTask = {
      text: taskName,
      key: this.state.id,
      date: d.toString(),
    }
    console.log(newTask)
    if(taskName !== null && taskName !==''){
      this.setState(state =>  {
        return {
            items: [...state.items, newTask],
            id: uuidv4()
        }
      })
    }
  }
  clearList = () =>{
    this.setState({
      items: []
    })
  }
  handleDelete = key =>{
    console.log(key)
    const filterItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items : filterItems
    })
  }
  handleEdit = key => {
    console.log(key);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm={5}>
            <Todoadd addItem = {this.addItem}/>
            <Todolist entries = {this.state.items} clearList ={this.clearList} 
            handleDelete = {this.handleDelete} 
            handleEdit = {this.handleEdit}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
