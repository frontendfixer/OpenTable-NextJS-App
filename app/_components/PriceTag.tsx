import { PRICE } from '@prisma/client'

type Props = {
  price: PRICE
}

const PriceTag = ({ price }: Props) => {
  const renderPrice = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      )
    }
    if (price === PRICE.EXPENSIVE) {
      return <span>$$$$</span>
    }
    return (
      <>
        <span>$$$</span>
        <span className="text-gray-400">$</span>
      </>
    )
  }

  return renderPrice()
}

export default PriceTag
