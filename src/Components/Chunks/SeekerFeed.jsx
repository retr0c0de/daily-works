import React from 'react'
import { CgMoreVertical } from 'react-icons/cg'
import { IoLogoUsd } from 'react-icons/io5'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { GrShareOption } from 'react-icons/gr'

const SeekerFeed = ({ title, company, pricePerHour, description }) => {
  return (
    <div className='w-10/12 px-10 py-5 mx-auto my-10 text-gray-800 bg-white shadow-sm lg:w-6/12 rounded-2xl h-96'>
      <header className='flex items-center justify-between'>
        <div className='text-2xl font-semibold transition cursor-pointer hover:underline'>
          {title}
        </div>
        <div>
          <CgMoreVertical />
        </div>
      </header>

      <div className='text-base font-normal text-gray-600'>{company}</div>

      <div className='flex items-center'>
        <span>
          <IoLogoUsd />
        </span>{' '}
        {`${pricePerHour}/hr`}
      </div>

      <div className='h-40 p-2 my-6 overflow-scroll'>{description}</div>

      <div className='flex items-center h-20 text-xl justify-evenly'>
        <BiUpvote />
        <BiDownvote />
        <BsFillBookmarkFill />
        <GrShareOption />
      </div>
    </div>
  )
}

export default SeekerFeed
