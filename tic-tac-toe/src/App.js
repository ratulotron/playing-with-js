import React, { Component } from 'react';
// import * as G from 'grommet';
// import Title from 'grommet/components/Title';
// import App from 'grommet/components/App';
import './App.css';

/**
 * ShoppingList component.
 * @param {string} name of the list
 * @param {list} list of items
 */
class ShoppingList extends Component {
  render() {
    return (
      <div className="ShoppingList">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          {this.props.list.map((item) =>
          <li>{item}</li>
          )}
        </ul>
      </div>
    );
  }
}


class Square extends Component {
  render() {
    return (
      /*<G.Button icon={<G.Edit />}
        label={this.props.value}
        onClick={() => alert('click')}
        primary={true} />*/
      <button // icon={<G.Edit />}
        label={this.props.name}
        onClick={() => alert('Hi!')}
        //primary={true} 
        >
        Say hi!
        </button>
    )
  }
}

class Box extends Component {
  render () {
    let S = `
    height: 100px;
    width: 100px;
    background: ${this.props.color}
    `;
    return <div className="insideContent" style={S}></div>
  }
}


// Main App
class App extends Component {
  render () {
    return (
      <div className="App">
        <Square name={"Say hi!"} />
        <ShoppingList name="Bazaar" list={["daal", "chaal", "ata"]} />
        {/*<Box color={"red"} />*/}
      </div>
    );
  }
}
export default App;
