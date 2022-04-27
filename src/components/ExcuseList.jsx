import { useState, useEffect } from "react"
import axios from 'axios'
import { BASE_URL, ALL_EXCUSES_URL } from '../globals'

const ExcuseList = (props) => {

    //const [allExcuses, setAllExcuses] = useState([])



    // useEffect(() => {
    //     const getTag = async () =>{
    
    //       try{
    //         const response = await axios.get(`${ALL_EXCUSES_URL}`)
    //         console.log(response.data)
    //         setAllExcuses(response.data)

    //       }catch (err){
    //         console.log(err);
    //       }
    //     }
    //       getTag()
    //     }, [props.setTag])
      
    
      return(
        //   <div>
        //      {allExcuses.map(excuse =>
        //         <p>{excuse}</p>
        //         )}
        //   </div>

        <div className="grid">
            {
                props.allExcuses.map((excuse) => (

                    <div key={excuse.id} className="card">
                        <p>{excuse.Excuse}</p>
                        
                    </div>

                ))
            }
        </div>


        )
  }
  
  export default ExcuseList