import React from 'react'
import { CgMoreVertical } from 'react-icons/cg'
import { IoLogoUsd } from 'react-icons/io5'
import { BiUpvote, BiDownvote } from 'react-icons/bi'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { GrShareOption } from 'react-icons/gr'
import { RiAccountCircleFill } from 'react-icons/ri'

const ProviderFeed = ({ name, pricePerHour }) => {
  return (
    <div className='flex flex-col justify-around w-10/12 h-48 px-10 py-5 mx-auto my-10 text-gray-800 bg-white shadow-sm lg:w-6/12 rounded-2xl'>
      <header className='flex items-center justify-between'>
        <div className='flex items-center text-2xl font-semibold capitalize transition cursor-pointer hover:underline justify-evenly'>
          <div className='mr-10 w-14 h-14'>
            <RiAccountCircleFill className='w-full h-full' />
          </div>
          {name}
        </div>
        <div>
          <CgMoreVertical />
        </div>
      </header>

      <div className='flex items-center justify-between'>
        <div className='flex items-center text-xl'>
          <span>
            <IoLogoUsd />
          </span>{' '}
          {`${pricePerHour}/hr`}
        </div>
      </div>

      <div className='flex items-center h-10 text-2xl justify-evenly'>
        <BiUpvote />
        <BiDownvote />
        <BsFillBookmarkFill />
        <GrShareOption />
      </div>
    </div>
  )
}

export default ProviderFeed
