import './styles/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, ALL_EXCUSES_URL } from './globals'
import Excuse from './components/Excuse'
import ExcuseList from './components/ExcuseList'
import FilteredExcuseList from './components/FilteredExcuseList'

const App = () => {

  const [excuses, setExcuses] = useState([])
  const [tag, setTag] = useState(false)
  const [tagList, setTagList] = useState(false)


  const handleSelect = (e) => {
    //console.log(e.target.value);
    if (e.target.value) setTag(e.target.value)

  }

  const toggleList = () => {
    {
      tag ? (
        setTag(false)
      ) : (
        setTag(true)
      )
    }
  }

  const toggleFilterList = () => {
    {
      tagList ? (
        setTagList(false)
      ) : (
        setTagList(true)
      )
    }
  }

  useEffect(() => {
    const getExcuses = async () => {
      const response = await axios.get(`${ALL_EXCUSES_URL}`)
      // console.log(response.data)
      setExcuses(response.data)
    }
    getExcuses()
  }, [])


  return (
    <div className="App">
      <main>
        <div className="instructions-group">
          <div className="instructions-text">
            <header><h1>Excuses Generator</h1></header>
            <p>Design work got you down? Don't feel like going to that meeting or you've been procrastinating on an assignment? Check out the list below of excuses!</p>
            <p>Interested in a certain type of excuse? Select an excuse type and a excuse of that type will appear.</p>
            <div className="theButton">

              <form className='excuseTypeMenu' >
                <label>
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

            </div>
          </div>
          <div className="image-container">

          </div>
        </div>
        <div >

          {tag === false ? (
            <div>
              <h2 className='excuse-list-header'> Here's a handy list of excuses to escape accountability! </h2>
              <ExcuseList allExcuses={excuses} />
            </div>
          ) : (

            <div className='content-container'>
              <h3 className='excuseType'> <u>{`You've selected a ${tag} type of excuse`}</u> </h3>
              <Excuse setTag={tag} />
              <button onClick={toggleList}>Click here to see the entire list of excuses</button>
              {/* <button onClick={toggleFilterList}>{`Click here to see the entire list of ${tag} excuses`}</button> */}

              {/* <FilteredExcuseList setTag = {tag} allExcuses={excuses} /> */}
            </div>

          )}

        </div>



      </main>
    </div>
  )
}

export default App