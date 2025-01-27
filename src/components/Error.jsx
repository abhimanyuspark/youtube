import React from 'react'

const Error = ({error=""}) => {
  return (
    <div className='flex items-center justify-center h-12 text-red-500 font-semibold'>
      Error : 
      {
        error === "" ? "" : error
      }
    </div>
  )
}

export default Error
