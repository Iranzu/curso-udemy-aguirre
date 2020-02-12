import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello(props) {
// return <h2>{props.title}</h2>
// }

// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {
    const {
      arrayOfNumbers,
      isActivated,
      multiply,
      objectWithInfo,
      title
    } = this.props

    const textoSegunBool = isActivated ? 'On' : 'Off'
    const mappedNumbers = arrayOfNumbers.map(multiply)

    return <div>
      {title}
      {/* <p>{this.props.title}</p> */}
      {/* <p>{this.props.number}</p> */}
      {/* <p>{textoSegunBool}</p> */}
      {/* <p>{mappedNumbers.join(', ')}</p> */}
      {/* <p>{this.props.objectWithInfo.key}</p> */}
      <p>{mappedNumbers.join(', ')}</p>
      <p>{objectWithInfo.key}</p>
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello from props' />
        <Text
          arrayOfNumbers={[2, 3, 10]}
          objectWithInfo={{ key: 'First value', key2: 'otherValue' }}
          isActivated
          multiply={(number) => number * 4}
          number={2}
          text='Texto en string'
          title={<h1>Este es el titulo</h1>}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;