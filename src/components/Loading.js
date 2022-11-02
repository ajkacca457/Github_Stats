import React from 'react'
import Spinner from "../images/Spinner-3.gif"

const Loading = () => {
  return (
    <div className='w-full my-3'>
        <img src={Spinner} alt="Loading.." className='mx-auto'/>
    </div>
  )
}

export default Loading