export default function Radio() {
  return (
    <label
      htmlFor='test'
      className='flex gap-[1.6rem] border border-border_default rounded-[0.8rem] pl-[1.6rem] py-[1.8rem] text-[1.4rem] w-full max-w-[60rem] hover:border-caramel items-center hover:cursor-pointer'
    >
      <input type='radio' name='' id='test' className='accent-caramel' />
      test
    </label>
  )
}
