import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'



const Excuse = ({displayExcuse}) => {
  const [excuse, setExcuse] = useState('')


  useEffect(() => {
    const getExcuse = async () => {
      try{
      
      const response = await axios.get(`${BASE_URL}`)
      console.log(response.data[0])
      setExcuse(response.data[0].excuse)
      }catch (err){
          console.log(err);
      }
  }
  getExcuse()
  }, [displayExcuse])

  return (
    
    <div key={excuse.id} className="card">
    <h2 style={{ fontStyle: 'italic' }}>{excuse!=='' && excuse}</h2>
    </div>
    
  )
}

export default Excuse