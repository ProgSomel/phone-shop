

const Favourite = ({phone}) => {

    const {id, phone_name, image, price, description, rating} = phone;
    
    return (
        
        <div className="relative flex  flex-col rounded-xl bg-gray-400 bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-green-400 bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6 h-[300px]">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {description}
          </p>
          <p className="mt-5">Ratings: {rating}</p>
        </div>
  
        
      </div>
        
    );
};

export default Favourite;