import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import LinkButton from '../../Atoms/LinkButton'

const labelClasses = `font-semibold text-sm text-gray-600 pb-1 block`
const inputClasses = `border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:ring-2 ring-offset-indigo-700 outline-none`

const LoginLayout = () => {
  return (
    <div className='flex flex-col items-center h-auto py-4 my-2'>
      <h1 className='my-10 text-xl font-semibold tracking-wide'>Login</h1>

      <div className='md:grid-col-4 md:grid md:w-4/12 md:grid-flow-row md:mx-auto'>
        <label className={labelClasses} htmlFor='username'>
          New Password
        </label>
        <input
          className={inputClasses}
          type='password'
          name='password'
          id='password'
        />

        <label className={labelClasses} htmlFor='password'>
          Confirm Password
        </label>
        <input
          className={inputClasses}
          type='password'
          name='password'
          id='password'
        />

        <LinkButton
          router='/saveNewPassword'
          routerName='Save'
          isPrimary={true}
          bgColor='indigo'
        />

        <div className='flex items-center justify-between my-8'>
          <a
            className='text-xs'
            href='https://passwordsgenerator.net/'
            target='_blank'
            rel='noreferrer'
          >
            Generate Password?
          </a>
          <a className='text-xs' href='/'>
            Need Help?
          </a>
        </div>

        <div className='flex items-center px-4 py-2 my-8 rounded-md justify-evenly hover:text-gray-50 hover:bg-indigo-500'>
          <a className='flex items-center justify-around text-sm' href='/'>
            <span className='mx-2'>
              <IoHomeSharp />
            </span>
            back to home
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginLayout
