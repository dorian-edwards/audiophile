import { useState } from 'react'

export default function Input() {
  const [text, setText] = useState<string>('')
  const [error, setError] = useState<{ status: boolean; message: string }>({
    status: false,
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (text.trim() === '') {
      setError({
        status: true,
        message: 'Name required',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-[600px]'>
      <div className='input-wrapper w-[95%] max-w-[60rem]'>
        <div className={`label-wrapper flex justify-between mb-[0.9rem]`}>
          <label htmlFor={``} className={`${error.status ? 'text-error' : ''}`}>
            Name
          </label>
          <p className={`text-error`}>{error.message}</p>
        </div>
        <input
          type={`text`}
          value={text}
          onChange={handleChange}
          style={inputStyling}
          className={`${
            error.status ? 'outline outline-2 outline-error !border-none' : ''
          } focus-within:outline-caramel`}
        />
      </div>
      <button className='block' type='submit'>
        submit
      </button>
    </form>
  )
}

const inputStyling: React.CSSProperties | undefined = {
  display: 'block',
  padding: '1.8rem 2.4rem',
  border: '1px solid #CFCFCF',
  borderRadius: '8px',
  width: '100%',
}
