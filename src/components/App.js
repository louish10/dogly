import './App.css';
import Button from './Button.js'
import Dog from './Dog.js'
import { useState } from 'react'

function App() {
  const [dogs, setDogs] = useState([]);
  const url = "https://random.dog/woof.json"

  function getDog() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDogs([...dogs, {
          url: data.url,
          id: crypto.randomUUID()
        }])
      })
  }

  function removeDog(id) {
    console.log(`Removing ${id}`)
    setDogs(dogs.filter(obj => obj.id !== id))
  }

  const dogList = dogs.map(dog => {
      return <Dog key={dog.id} id={dog.id} url={dog.url} destroy={removeDog} ></Dog>
    })

  return (
    <div className="App">
      <h1>Dogly</h1>
      <Button cb={getDog}></Button>
      <div className="dog-grid">{dogList}</div>
    </div>
  );
}

export default App;

