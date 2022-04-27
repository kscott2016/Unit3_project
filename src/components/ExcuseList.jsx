import { useState, useEffect } from "react"
import axios from 'axios'
import { BASE_URL, ALL_EXCUSES_URL } from '../globals'

const ExcuseList = (props) => {

    return (
        <div className="grid">
            {
                props.allExcuses.map((excuse) => (

                    <div key={excuse.id} className="card">
                        <p className="excuseText">{excuse.Excuse}</p>
                        <p className="excuseType">Excuse type: <span>{excuse.Tag}</span></p>
                    </div>
                ))
            }
        </div>
    )
}

export default ExcuseList