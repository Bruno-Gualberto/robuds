import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
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
    const filteredRobuds = this.state.robuds.filter(robud => {
      return robud.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    if (this.state.robuds.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Robuds</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robuds={filteredRobuds} />
        </div>
      )
    }
  }
}

export default App;