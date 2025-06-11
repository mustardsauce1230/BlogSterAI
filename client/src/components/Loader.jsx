import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='h-16 w-16 rounded-full border-4 border-transparent border-t-purple-500 border-b-purple-500 animate-spin'></div>
    </div>
  )
}

export default Loader
