import React from 'react'

type Props = {}

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between mx-16 my-8">
        <h1 className='font-extrabold text-3xl'>Navbar</h1>
        <div className='flex flex-row space-x-14 font-semibold'>
            <p>About us</p>
            <p>Clean air</p>
            <p>Products</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default Navbar