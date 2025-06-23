import React from 'react'
import {useNavigate} from "react-router-dom"
 

const BackButton = () => {

    const navigate=useNavigate()

    const BackToHomePage=()=>{
        navigate("/")
        console.log("Hello")
    }
  return (
    <div>
        <button onClick={BackToHomePage}>
            Back to Home Page
        </button>
      
    </div>
  )
}

export default BackButton
