import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} alt="offer" className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Experience unmatched comfort and style with our special offer on premium shoes. Elevate your wardrobe with our exceptional footwear today.</p>
        <p className="mt-4 lg:max-w-lg info-text">Upgrade your shoe collection with our exclusive offer. Our high-quality shoes blend elegance and durability. Step into luxury now!</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More" backgroundColor='bg-white' borderColor='bg-slate-gray' textColor='text-slate-gray' />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer