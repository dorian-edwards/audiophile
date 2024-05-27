export default function Item({
  quantity,
  name,
}: {
  quantity: number
  name: string
}) {
  return (
    <div className='item-inventory flex'>
      <small className='quantity w-[10%] text-body text-caramel font-bold'>
        {quantity}x
      </small>
      <p className='item w-[90%] text-body text-med-gray capitalize'>{name}</p>
    </div>
  )
}
