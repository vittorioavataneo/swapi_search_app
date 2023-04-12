import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import searchPeople from './api'
import PeopleList from './PeopleList'

function App() {
  const[people, setPeople] = useState([]);

  const handleSubmit = async (term) =>{
    const results = await searchPeople(term);
    setPeople(results);
  }

  return (
    <section>
      <SearchBar onSubmit={handleSubmit}/>
      <PeopleList people={people}/>
    </section>
  );
}

export default App;
