import React from 'react';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      robuds: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ robuds: users }))
  }

  onSearchChange = ({ target }) => {
    this.setState({ searchfield: target.value });
  }

  render () {
    const { robuds, searchfield } = this.state;
    const filteredRobuds = robuds.filter(robud => {
      return robud.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robuds.length ?
      <h1>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Robuds</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robuds={filteredRobuds} />
          </Scroll>
        </div>
      )
  }
}

export default App;