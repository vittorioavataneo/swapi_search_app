import { useState } from 'react';
import './SearchBar.css'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    const show = event.target.value.replaceAll(/[^A-Za-z]/g, "")
    setTerm(show);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label> Search your favorite character </label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;