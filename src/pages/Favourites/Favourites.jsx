/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Favourite from "../Favoutite/Favourite";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleDeleteFavourite = () => {
    localStorage.clear();
    setFavourites([]);
    setNoDataFound('No data Available');
  }

  useEffect(() => {
    const favouriteItem = JSON.parse(localStorage.getItem("favourites"));

    if (favouriteItem) {
      setFavourites(favouriteItem);
    } else {
      setNoDataFound("no Data Available");
    }
  }, []);

  return (
    <div>
        {
            noDataFound ? ( <p className="flex justify-center items-center h-screen text-3xl">{noDataFound}!</p> ) :
            <div>
                {
                    favourites.length > 0 && (
                        <div className="text-center mt-5 ">
                            <button onClick={handleDeleteFavourite} className="bg-red-300 p-2 shadow-lg rounded-lg">Delete All Favourites</button>

                            <div className="mt-5">
                            <p className="inline font-bold ">Total Price: </p>
                                {
                                    favourites.reduce((pre, currItem) => pre+currItem.price, 0)

                                }$
                            </div>
                        </div>
                                            )
                }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                    {
                       isShow ? favourites.map((favouritePhone) => <Favourite key={favouritePhone.id} phone={favouritePhone}></Favourite>) :

                       favourites?.slice(0,3).map((favouritePhone) => <Favourite key={favouritePhone.id} phone={favouritePhone}></Favourite>) 
                    }
                </div>
            </div>
        }
        <div className="text-center my-8 ">
            {
                favourites.length > 3 && (isShow ? <button className="bg-red-300 p-2 rounded-lg shadow-lg" onClick={()=>setIsShow(!isShow)}>Show Less</button>: <button className="bg-green-300 p-2 rounded-lg shadow-lg" onClick={()=>setIsShow(!isShow)}>Show More</button>)
            }
        </div>
    </div>
  );
};

export default Favourites;
