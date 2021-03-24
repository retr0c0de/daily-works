import TextError from './TextError'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

function Input({ label, labelClasses, name, ...rest  }) {
  return (
    <div className='form-control'>
      <label className={labelClasses} htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component={TextError} />
      <Field id={name} name={name} {...rest} />
    </div>
  )
}

export default Input
