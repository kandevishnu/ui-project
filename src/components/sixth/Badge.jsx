import React from 'react'

const Badge = (props) => {
    console.log(props)
  return (
    <div className='lg:px-9 lg:py-4 px-4 py-1 sm:px-6 sm:py-2 md:px-7 md:py-3 border-gray-400 border w-fit sm:text-[20px] text-lg rounded-full'>
      {props.props.name}
    </div>
  )
}

export default Badge
