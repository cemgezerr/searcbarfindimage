import SearchBar from './components/SearchBar';
import searchImages from './api';
import İmageList from './components/İmageList'
import { useState } from 'react';

function App() {
  const [images,setİmages] = useState([]);
  const handleSubmit =async (term) => {

  const result = await searchImages(term);
    setİmages(result);
 
  };


  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <İmageList images={images}/>
    </div>
  );
}

export default App;
