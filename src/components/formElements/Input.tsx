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
    verifyInput()
  }

  function verifyInput() {
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
        <div
          className={`label-wrapper flex justify-between mb-[0.9rem] text-[1.2rem]`}
        >
          <label
            htmlFor={``}
            className={`font-bold ${error.status ? 'text-error' : ''}`}
          >
            Name
          </label>
          <p className={`text-error font-normal`}>{error.message}</p>
        </div>
        <input
          type={`text`}
          value={text}
          onChange={handleChange}
          style={inputStyling}
          className={`text-[1.4rem] leading-[1.375] ${
            error.status
              ? 'outline outline-2 outline-error !border-transparent'
              : ''
          } focus-within:outline-caramel`}
          onBlur={verifyInput}
          onFocus={() => {
            setError({ status: false, message: '' })
          }}
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
