import React, { Component } from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchBox/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      serchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
}

handleChange = e => {
  this.setState({ searchField: e.target.value});
};

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      searchField ? monster.name.toLowerCase().includes(searchField.toLowerCase()) : true
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox onSearchChange={this.onSearchChange} placeholder='Search Monsters'/>
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
