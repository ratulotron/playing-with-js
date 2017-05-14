import React, { Component } from 'react';
import * as G from 'grommet';
// import Title from 'grommet/components/Title';
// import App from 'grommet/components/App';
import './App.css';


/**
 * ShoppingList component.
 * @param {string} name of the list
 * @param {list} list of items
 */
/*class ShoppingList extends Component {
  render() {
    return (
      <G.Section className="Shopping-List">
        <h1>Shopping List for {this.props.name}</h1>
        <G.List>
          {this.props.list.map((item) =>
          <G.ListItem>{item}</G.ListItem>
          )}
        </G.List>
      </G.Section>
    );
  }
}*/


class Square extends Component {
  render() {
    return (
      <G.Button icon={<G.Edit />}
        label={this.props.value}
        onClick={() => alert('click')}
        primary={true} />
    )
  }
}


// Main App
class App extends Component {
  render () {
    return (
      <G.App pad='large'
        justify='center'>
        <G.Article pad='large'
          justify='center'>
          <G.Section>
              {/*<ShoppingList name="Bazaar" list={["Rice", "Sugar", "Milk"]}/>*/}
              <Square/>
          </G.Section>
        </G.Article>
      </G.App>
    );
  }
}
export default App ;
