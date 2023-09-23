import { Link } from "react-router-dom";
import Favourites from "../Favourites/Favourites";
import swal from "sweetalert";

const PhoneDetail = ({ phone }) => {
  const { id, image, phone_name, price, rating, description } = phone;

  const handleAddtoCart = () => {
    const cartArray = [];

    const itemFromCart = JSON.parse(localStorage.getItem("favourites"));

    if (!itemFromCart) {
      cartArray.push(phone);
      localStorage.setItem("favourites", JSON.stringify(cartArray));
      swal("Good job!", "Products added successfully!", "success");
    } else {
      const isExits = itemFromCart.find((item) => item.id === id);

      if (isExits) {
        swal("Error!", "Item already Added !", "error");
      } else {
        cartArray.push(...cartArray, phone);
        localStorage.setItem("favourites", JSON.stringify(cartArray));
        swal("Good job!", "Products added successfully!", "success");
      }
    }
  };

  return (
    <div className="flex justify-center items-center lg:h-screen mt-5">
      <div className="relative w-[600px] h-full flex  flex-col rounded-xl bg-gray-400 bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-green-400 bg-clip-border text-gray-700">
          <img src={image} className="  w-full object-cover" />
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
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
