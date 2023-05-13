"use client"; // this is a client component
import React from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
type Props = {}

const CTASlogan = () => {
  return (
    <div className='pt-56 pb-10 pl-32 pr-16'>
        <p className='text-7xl font-semibold font-sans'>Clean air in your home.</p>
        <div className='flex flex-row'>
            <p className='font-semibold text-lg'>To the webshop</p>
            <ArrowForwardRoundedIcon />
        </div>
    </div>
  )
}

export default CTASlogan