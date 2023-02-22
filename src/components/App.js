import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(res => res.json())
  .then(data => setPlants(data))
})

function addPlant(plant) {
  fetch("http://localhost:6001/plants", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      "name": plant.name,
      "image": plant.image,
      "price": plant.price
     })
  })
  .then(res => res.json())
  .then(data => setPlants([...plants, data]))
}

const filteredPlants =
  plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

function handleSearch(text){
  setSearch(text)
}

  return (
    <div className="app">
      <Header />
      <PlantPage plants={filteredPlants} addPlant={addPlant} handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
