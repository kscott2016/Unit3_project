import { useState, useEffect } from "react"
import axios from 'axios'

const ExcuseList = (props) => {

    const [allExcuses, setAllExcuses] = useState([])



    useEffect(() => {
        const getTag = async () =>{
    
          try{
            const response = await axios.get(props.allExcuses)
            console.log(response)
            setAllExcuses(response.data)

          }catch (err){
            console.log(err);
          }
        }
          getTag()
        }, [props.setTag])
      
    
      return(
          <div>
             {allExcuses.map(excuse =>
                <p>{excuse.Excuse}</p>
                )}
          </div>
      )
  }
  
  export default ExcuseList