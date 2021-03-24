import React from 'react'

const error = 'text-xs text-red-400 font-semibold tracking-wide'

function TextError({ children }) {
  return <div className={error}>{children}</div>
}

export default TextError
