import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';

import { robuds } from "./robuds.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      robuds: robuds,
      searchfield: ''
    }
  }

  onSearchChange = ({ target }) => {
    this.setState({ searchfield: target.value });
  }

  render () {
    const filteredRobuds = this.state.robuds.filter(robud => {
      return robud.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>Robuds</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robuds={filteredRobuds} />
      </div>
    )
  }
}

export default App;