import { Link } from "react-router-dom";
import Favourites from "../Favourites/Favourites";
import swal from "sweetalert";

const PhoneDetail = ({ phone }) => {
  const { id, image, phone_name, price, rating, description } = phone;

  const handleAddtoCart = () => {
    const addedfavouritesArray = [];

    const favoriteItems = JSON.parse(localStorage.getItem("favourites"));

    //jokhon kisu nai tokhon e if vitor dhukba
    if (!favoriteItems) {
      addedfavouritesArray.push(phone);
      localStorage.setItem("favourites", JSON.stringify(addedfavouritesArray));
      swal("Good job!", `${phone_name} added successfully`, "success");
    } 
    
    else {


      const isExits = favoriteItems.find((phone) => phone.id === id);

      
      if (!isExits) {

        addedfavouritesArray.push(...favoriteItems, phone);
        localStorage.setItem("favourites", JSON.stringify(addedfavouritesArray));
        swal("Good job!", `${phone_name} added successfully`, "success");
       
      } else {
        swal("Error!", `${phone_name} is already Added !`, "error");
      }

    


    }

  };

  return (
    <div className="flex justify-center items-center  mt-5">
      <div className="relative w-[600px]  flex  flex-col rounded-xl bg-gray-400 bg-clip-border text-gray-700 shadow-md">
        <div className=" h-[600px] ">
          <img src={image} className="  w-full h-[600px]  object-cover" />
        </div>
        <div className="px-6 py-2 ">
          <div className=" flex items-center justify-between mt-8">
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

        <div className="p-6 pt-0">
          <Link>
            <button onClick={handleAddtoCart} className=" w-full bg-blue-400">
              Add to Favourite
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
