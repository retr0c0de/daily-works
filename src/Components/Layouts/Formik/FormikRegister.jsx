import { Form, Formik } from 'formik'
import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import * as Yup from 'yup'
import LinkButton from '../../Atoms/LinkButton'
import FormikControl from './FormikControl'

const style = {
  label: 'font-semibold text-sm text-gray-600 pb-1 block',
  input:
    'border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:ring-2 ring-offset-indigo-700 outline-none',
  heading: 'my-10 text-xl font-semibold tracking-wide',
  container: 'flex flex-col items-center h-auto py-4 my-2',
  'sub-container':
    'md:grid-col-4 md:grid md:w-4/12 md:grid-flow-row md:mx-auto',
}

function FormikRegister() {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  }
  const validationSchema = Yup.object({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Not a valid email!'),
    phone: Yup.number('Only number are allowed').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Required'),
  })
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik
      className={style.container}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className={style['sub-container']}>
          <h1 className={style.heading}>Register</h1>
          <FormikControl
            labelClasses={style.label}
            className={style.input}
            control='input'
            type='text'
            label='Firstname'
            name='firstname'
          />
          <FormikControl
            labelClasses={style.label}
            className={style.input}
            control='input'
            type='text'
            label='Lastname'
            name='lastname'
          />
          <FormikControl
            labelClasses={style.label}
            className={style.input}
            control='input'
            type='email'
            label='Email'
            name='email'
          />
          <FormikControl
            labelClasses={style.label}
            className={style.input}
            control='input'
            type='phone'
            label='Phone'
            name='phone'
          />
          <FormikControl
            labelClasses={style.label}
            className={style.input}
            control='input'
            type='password'
            label='Password'
            name='password'
          />
          <FormikControl
            labelClasses={style.label}
            className={style.input}
            control='input'
            type='password'
            label='Confirm Password'
            name='confirmPassword'
          />

          <button>
            <LinkButton
              routerName='Sign Up'
              isPrimary={true}
              bgColor='indigo'
            />
          </button>

          <div className='flex items-center justify-between my-8'>
            <a className='text-xs' href='/'>
              Already Signed Up?
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

export default FormikRegister
