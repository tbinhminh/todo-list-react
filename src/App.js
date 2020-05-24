import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Todolist from './components/Todolist/Todolist';
import Todoadd from './components/Todoadd/Todoadd';
class App extends Component {
  constructor() {
    super();
    this.state ={
      items: []
    }
  }
  addItem = (taskName) => { //truyen  call back addItem vao component Todoadd
    const newTask = {
      text: taskName,
      key: Date.now()
    }
    if(taskName !== null && taskName !==''){
      // const items = [...this.state.items, newTask]
      // this.setState({items: items}) // or {items,}
      this.setState(state =>  {
        return {
            items: [...state.items, newTask]
        }
      })
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm={5}>
            <Todoadd addItem = {this.addItem}/>
            <Todolist entries={this.state.items}/>
            
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;
