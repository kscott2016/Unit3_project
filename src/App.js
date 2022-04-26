import './styles/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './globals'
import Excuse from './components/Excuse'


const App = () => {
  const [tag, setTag] = useState("")

  const handleSelect=(e)=>{
    console.log(e.target.value);
    if(e.target.value) setTag(e.target.value)
  }

  return (
    <div className="App">
      <main>
      <div className="instructions-group">
        <div className="instructions-text">
        <header><h1>Excuses Generator</h1></header>
        <h3>You want to be a lazy programmer? Need an excuse for work? Click on the button for an excuse!</h3>
        <div className="theButton">

        <form >
        <label>
          Select the type of excuse you would like
          <select name="excuseSelect" id="excuseSelect" onChange={handleSelect}>
            <option value="">Select an excuse type</option>
            <option value="inspiration">Inspiration</option>
            <option value="design">Design</option>
            <option value="animation">Animation</option>
            <option value="typography">Typography</option>
            <option value="color">Color</option>
            <option value="tools">Tools</option>
            <option value="development">Development</option>
            <option value="presentation">Presentation</option>
            <option value="email">Email</option>
            <option value="progress">Progress</option>
            <option value="starting">Starting</option>
            <option value="disagreement">Disagreement</option>
          </select>
        </label>
      </form> 
        {/* <button onClick={toggleExcuses}>Escape Accountability!</button>  */}
        </div>
        </div>
        <div className="image-container">

        </div>
        </div>
        <div className="quote-container">
          
          
         
          <h3>You've selected {tag} </h3>
  
        </div>
        
      </main>
    </div>
  )
}

export default App