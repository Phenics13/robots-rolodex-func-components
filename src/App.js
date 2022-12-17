import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  useEffect(() => {
    const filteredRobots = robots.filter(robots =>
      robots.name.toLowerCase().includes(searchField)
    );
    setFilteredRobots(filteredRobots);
  }, [robots, searchField]);

  return (
    <div className="App">
      <h1 className='title'>Robots Rolodex</h1>
      <SearchBox
        className='robots-search-box'
        placeholder='search robots'
        onSearchChange={onSearchChange}
      />
      <CardList filteredRobots={filteredRobots} />
    </div>
  );
}

export default App;
