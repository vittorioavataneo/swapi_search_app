import { useState } from 'react';

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <label> Search your favorite Jedi </label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;