import React, {useState} from "react";

function NewPlantForm({addPlant}) {

  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")
  const [newPrice, setNewPrice] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    const plant = {
    name: newName,
    image: newImage,
    price: newPrice
  }
    addPlant(plant)

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setNewName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setNewImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setNewPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
