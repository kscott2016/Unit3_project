import './styles/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, ALL_EXCUSES_URL } from './globals'
import Excuse from './components/Excuse'
import ExcuseList from './components/ExcuseList'

const App = () => {

  const [excuses , setExcuses] = useState([]) 
  const [tag, setTag] = useState(null)


  const handleSelect=(e)=>{
    //console.log(e.target.value);
    if(e.target.value) setTag(e.target.value)
    
  }

  useEffect(() => {
    const getExcuses = async () => {
      const response = await axios.get(`${ALL_EXCUSES_URL}`)
      console.log(response.data)
      setExcuses(response.data.Excuse)
    }
    getExcuses()
  }, [])


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
            
          </select>
        </label>
      </form> 
        {/* <button onClick={<ExcuseList tag ={tag}/>}>See an entire list of excuses to get that manager off your back!</button> */}
        </div>
        </div>
        <div className="image-container">

        </div>
        </div>
        <div className="quote-container">
          
          
         
          {/* <h3>You've selected {tag} </h3> */}
          {/* <Excuse setTag = {tag}/> */}
          {setTag ? (
            <Excuse setTag = {tag}/>
          ) : (

            <ExcuseList allExcuses = {excuses} />
            
          )}
  
        </div>
        
      </main>
    </div>
  )
}

export default App