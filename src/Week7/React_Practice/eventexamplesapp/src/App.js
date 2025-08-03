import React from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Binding this
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  }

  sayHello() {
    console.log("Hello! This is a static message.");
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleSyntheticEvent = (e) => {
    e.preventDefault(); // Synthetic event in action
    alert("I was clicked");
  };

  render() {
    return (
      <div className="App">
        <h1>React Events Example</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handleSyntheticEvent}>OnPress</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
