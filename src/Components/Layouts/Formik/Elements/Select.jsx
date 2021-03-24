import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Select({ label, name, options, ...rest }) {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
        {options.map(({ key, value }) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select
