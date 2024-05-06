import { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState<number>(1)

  function handleDecrease() {
    if (number === 0) return
    setNumber((num) => num - 1)
  }

  function handleIncrease() {
    setNumber((num) => num + 1)
  }

  return (
    <div className='flex px-[2rem] justify-between items-center w-[12rem] h-[4.8rem] bg-anti-flash-white shrink-0'>
      <button
        className=' text-[1.3rem] text-gray hover:text-caramel'
        onClick={handleDecrease}
      >
        -
      </button>
      {number}
      <button
        className=' text-[1.3rem] text-gray hover:text-caramel'
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  )
}
