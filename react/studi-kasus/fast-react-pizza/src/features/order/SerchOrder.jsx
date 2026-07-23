import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SerchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Serch order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white"
      />
    </form>
  );
}

export default SerchOrder;
