import { Form, Formik } from 'formik'
import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import * as Yup from 'yup'
import LinkButton from '../../Atoms/LinkButton'
import FormikControl from '../Formik/FormikControl'

const label = 'font-semibold text-sm text-gray-600 pb-1 block'
const input =
  'border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:ring-2 ring-offset-indigo-700 outline-none'
const heading = 'my-10 text-xl font-semibold tracking-wide'
const container = 'flex flex-col items-center h-auto py-4 my-2'
const subContainer =
  'md:grid-col-4 md:grid md:w-4/12 md:grid-flow-row md:mx-auto'
const style = {
  input,
  label,
  heading,
  container,
  subContainer,
}

const initialValues = {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string().required('Required').email('Not valid Email!'),
  password: Yup.string().required('Required'),
})

const onSubmit = (values) => console.log(values)

const LoginLayout = () => {
  return (
    <Formik
      className={style.container}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className={style.subContainer}>
          <h1 className={style.heading}>Login</h1>
          <FormikControl
            className={style.input}
            labelClasses={style.label}
            control='input'
            label='Email'
            type='email'
            name='email'
          />
          <FormikControl
            className={style.input}
            labelClasses={style.label}
            control='input'
            label='Password'
            type='password'
            name='password'
          />
          <LinkButton
            router='/login'
            routerName='Log In'
            isPrimary={true}
            bgColor='indigo'
          />

          <div className='flex items-center justify-between my-8'>
            <a className='text-xs' href='/resetPassword'>
              Forgot Password?
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
        </Form>
      )}
    </Formik>
  )
}

export default LoginLayout
