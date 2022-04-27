import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Excuse = (props) => {

  const [excuse, setExcuse] = useState('')

  useEffect(() => {
    const getTag = async () => {

      try {
        const response = await axios.get(`${BASE_URL}/${props.setTag}`)
        //console.log(response.data.Excuse)
        setExcuse(response.data.Excuse)
      } catch (err) {
        console.log(err);
      }
    }
    getTag()
  }, [props.setTag])
  return (
    <h3 className="excuseText">{excuse}</h3>
  )
}
export default Excuse;