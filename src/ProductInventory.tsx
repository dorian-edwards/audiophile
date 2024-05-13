import Item from './Item'

export default function ProductInventory() {
  return (
    <section className='product-inventory mb-[8.8rem] tablet2:flex desktop2:flex-col desktop2:w-full'>
      <h2 className='text-section-heading uppercase mb-[2.4rem] tablet2:w-[45%] desktop2:w-full'>
        in the box
      </h2>
      <ul className='product-inventory__items tablet2:w-full flex flex-col gap-y-[0.8rem] tablet2:max-w-[35rem] desktop2:w-full'>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
    </section>
  )
}
