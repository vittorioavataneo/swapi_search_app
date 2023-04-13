import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import searchPeople from './api'
import PeopleList from './PeopleList'

function App() {
  const[people, setPeople] = useState([]);
  const[page, setPage] = useState(1);
  const[term, setTerm] = useState('');
  const[tableCreation, setTableCreation] = useState(false);
  const[noResults, setNoResults] = useState(false);

  const handleSubmit = async (newTerm) => {
    const results = await searchPeople(newTerm, 1);
    if(results.length > 0){
      setPeople(results);
      setTerm(newTerm);
      setTableCreation(true);
      setNoResults(false);
      setPage(1);
    }else{
      setTableCreation(false)
      setNoResults(true);
    }
  };

  const handleNextPage = async () => {
    const results = await searchPeople(term, page + 1);
    setPeople(results);
    setPage(page + 1);
  };

  return (
    <section>
      <SearchBar onSubmit={handleSubmit}/>
      {tableCreation && (
        <>
          <button onClick={handleNextPage}>Next Page</button>
          <PeopleList people={people}/>
        </>
      )}
      {noResults && (
        <p className='not-found'>No results found!</p>
      )}
    </section>
  );
}

export default App;