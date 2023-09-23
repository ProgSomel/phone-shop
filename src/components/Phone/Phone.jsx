/* eslint-disable react/prop-types */

import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Phone = ({ phone }) => {
  const { id, image, phone_name, price, rating, description } = phone;

  return (
    <div className="relative flex h-[600px] w-full flex-col rounded-xl bg-gray-400 bg-clip-border text-gray-700 shadow-md">
      <div className="relative  mx-4 mt-4  overflow-hidden rounded-xl bg-green-400 bg-clip-border text-gray-700">
        <img src={image} className=" h-full w-full object-cover" />
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
        <p className="mt-5">
          
        <Rating
        emptySymbol={<FontAwesomeIcon icon={['far', 'star']} />} // Use FontAwesome for empty star
        fullSymbol={<FontAwesomeIcon icon={['fas', 'star']} />}   // Use FontAwesome for full star
        initialRating={rating}
        readonly
      />
        </p>
      </div>

      <div className="p-6 pt-0 mt-12 lg:mt-0">
        <Link to={`/phones/${id}`} state={phone_name}>
          <button className=" h-full w-full bg-blue-400">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Phone;
