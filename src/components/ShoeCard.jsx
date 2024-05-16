const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  
    return (
    <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} `}
        onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-cover bg-center max-sm:w-40 max-sm:h-40 max-sm:p-4 rounded-xl">
            <img className="object-contain"
                src={imgURL.thumbnail}
                alt="shoe collection"
                height={127}
                width={103}
            />
        </div>
    </div>
  )
};

export default ShoeCard;