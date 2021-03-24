import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function CheckboxGroup({ label, name, options, ...rest }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) =>
          options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
                <ErrorMessage name={name} component={TextError} />
              </React.Fragment>
            )
          })
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CheckboxGroup
