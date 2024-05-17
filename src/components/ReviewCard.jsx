import { star } from "../assets/icons"

const ReviewCard = ({customerName, rating, imgURL, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img 
            src={imgURL}
            alt="customer"
            className="object-cover rounded-full w-[120px] h-[120px]"
        />
        <p className="mt-6 max-w-sm text-lg text-center text-montserrat text-slate-gray">{feedback}</p>
        <div className="flex justify-center items-center mt-3 gap-2.5">
            <img 
                src={star}
                alt="rating"
                width={24}
                height={24}
                className="object-contain m-0"
            />
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h2 className="mt-1 font-palanquin font-bold text-3xl text-center ">{customerName}</h2>
    </div>
  )
}

export default ReviewCard