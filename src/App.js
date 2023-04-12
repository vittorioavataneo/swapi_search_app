import {useState} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import searchPeople from './api'
import PeopleList from './PeopleList'

function App() {
  const[people, setPeople] = useState([]);
  const[page, setPage] = useState(1);
  const[term, setTerm] = useState('');
  const[tableCreation, setTableCreation] = useState(false);

  const handleSubmit = async (newTerm) => {
    const results = await searchPeople(newTerm, 1);
    setPeople(results);
    setTerm(newTerm);
    setTableCreation(true);
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
          <PeopleList people={people}/>
          <button onClick={handleNextPage}>Next Page</button>
        </>
      )}
    </section>
  );
}

export default App;
