import React from 'react';
import './scss/base.scss';
import List from './components/List';
import Controls from './components/Controls'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        delete: false,
        notExist: false,
        error: false,
        todos: null
    };
  }
  
  handleDelete = () => {
    this.setState({delete: true,
      notExist: false,
      error: false})
  }
  handleNotExist = () => {
    this.setState({delete: false,
      notExist: true,
      error: false})
  }
  handleError = () => {
    this.setState({delete: false,
      notExist: false,
      error: true})
  }
  updateTodos = (value) => {
    this.setState({todos: value});
  }

  render(){
    return (
      <div className="container">
        <h1>Test assigment</h1>
        <h2>Empty state component</h2>
  
        <Controls deleteItems={this.handleDelete} 
                  error={this.handleError} 
                  notExist={this.handleNotExist}
                  disabledButtons={this.state.todos ? false : true}
        />
        <List deleteItems={this.state.delete ? true : false}
              error={this.state.error ? true : false}
              itemsNotExist={this.state.notExist ? true : false}
              update={this.updateTodos}
        />
  
      </div>
    );
  }
}

export default App;
