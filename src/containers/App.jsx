import React, { useState, useEffect } from 'react';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const App = () => {
  const [robuds, setRobuds] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => setRobuds(users))
  }, []);

  const onSearchChange = ({ target }) => setSearchfield(target.value);

  const filteredRobuds = robuds.filter(robud => {
    return robud.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  return !robuds.length ?
    <h1>Loading...</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Robuds</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robuds={filteredRobuds} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
}

export default App;