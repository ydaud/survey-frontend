import { useState } from 'react'

export const useField = (type, base) => {
  const [value, setValue] = useState(base)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue(base)
  }

  return {
    type,
    value,
    onChange,
    reset
  }
}
