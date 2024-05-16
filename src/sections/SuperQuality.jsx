import { shoe8 } from "../assets/images";
import { Button } from "../components"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
          We provide you 
          <span className="text-coral-red"> Super Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">"Experience unparalleled comfort and durability with our premium-grade shoes, meticulously crafted for exceptional performance and style. Step into excellence with us today."</p>
        <p className="mt-4 lg:max-w-lg info-text">Our Dedication to Detail and Excellence ensures your Satisfaction.</p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          height={522}
          width={570}
          className="object-contain"
        />
      </div>
    </section>  
  )
}

export default SuperQuality;