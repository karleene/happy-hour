import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AlcoholResults from './AlcoholResults';


function App() {

  const [alcohol, setAlcohol] = useState('');
  const [selectedAlcohol, setSelectedAlcohol] = useState([]);

  useEffect(() => {
    axios ({
      baseURL: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`,
      method: 'GET',
      dataResponse: 'json',
    }).then ((data) => {
      setSelectedAlcohol(data.data.drinks)
    })
  }, [alcohol])

  const handleChange = (event) => {
    event.preventDefault()

    setAlcohol(event.target.value)
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleChange}>
        <select name="alcohol" id="alcohol" value={alcohol} onChange={handleChange}>
          <option value="placeholder">Select Alcohol</option>
          <option value="gin">Gin</option>
          <option value="vodka">Vodka</option>
          <option value="tequila">Tequila</option>
          <option value="brandy">Brandy</option>
          <option value="whiskey">Whiskey</option>
          <option value="rum">Rum</option>
        </select>
      </form>

      <AlcoholResults selectedAlcohol={selectedAlcohol} alcohol={alcohol} />
      
    </div>
  );
}

export default App;
