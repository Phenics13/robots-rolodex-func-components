import { ChangeEvent, useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import { getData } from './utils/data.utils';

export type Robot = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [robots, setRobots] = useState<Robot[]>([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Robot[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setRobots(users);
    };

    fetchUsers();
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
