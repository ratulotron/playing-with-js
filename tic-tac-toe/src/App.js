import React, { Component } from 'react';
import * as G from 'grommet';
// import Title from 'grommet/components/Title';
// import App from 'grommet/components/App';
import './App.css';

class App extends Component {
  render () {
    return (
      <G.App pad='large'
        justify='center'>
        <G.Article pad='large'
          justify='center'>
          {/*<G.Section>
            <G.Headline>
              <G.Title>Hello World</G.Title>
            </G.Headline>
          </G.Section>*/}
          <G.Section>
            {/*<G.Paragraph>Hello from a Grommet page!</G.Paragraph>
            <G.Paragraph>Now, head back to the <a href="https://github.io/docs/hello-world/">Hello World</a> guide to continue your Grommet exploration.</G.Paragraph>*/}
              <ShoppingList name="Bazaar" list={["Rice", "Sugar", "Milk"]}/>,
          </G.Section>
        </G.Article>
      </G.App>
    );
  }
}



/**
 * ShoppingList component.
 * @param {string} name of the list
 * @param {list} list of items
 */
class ShoppingList extends Component {
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
}

export default App ;
