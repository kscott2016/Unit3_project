import './styles/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './globals'
import Excuse from './components/Excuse'

{var excuseCategories = [
  "family",
  "office",
  "children",
  "college",
  "party"
];}

const App = () => {
  const [displayExcuse, setExcuse] = useState(false)

  const toggleExcuses = () => {
    {displayExcuse ? (
      setExcuse(false)
      ) : (
        setExcuse(true)
      )
    }
  }

  return (
    <div className="App">
      <main>
      <div className="instructions-group">
        <div className="instructions-text">
        <header><h1>Excuses Generator</h1></header>
        <h3>Need an excuse? Click on the button for an idea on how to further delay your responsibilities.</h3>
        <div className="theButton">

        <form >
        <label>
          Select the type of excuse you would like
          <select name="excuseSelect" id="excuseSelect" onChange={toggleExcuses}>
            <option value="family">Family</option>
            <option value="office">Office</option>
            <option value="children">Children</option>
            <option value="college">College</option>
            <option value="party">Party</option>
          </select>
        </label>
      </form>



        {/* { <button onClick={toggleExcuses}>Escape Accountability!</button> } */}
        </div>
        </div>
        <div className="image-container">

        </div>
        </div>
        <div className="quote-container">
          
          {displayExcuse===false ? 
          <h2>Escape your problems</h2>
          :<Excuse displayExcuse={displayExcuse} />}
  
        </div>
        
      </main>
    </div>
  )
}

export default App