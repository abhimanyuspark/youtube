import React from 'react'

const Error = ({error=""}) => {
  return (
    <div className='flex items-center'>
      Error 
      {
        error === "" ? "" : error
      }
    </div>
  )
}

export default Error
