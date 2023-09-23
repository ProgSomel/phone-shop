import { useLoaderData } from "react-router-dom";
import Phones from "../Phones/Phones";

const Home = () => {

    const allPhones = useLoaderData();
    

    return (
        <div>
        <h1 className=" text-4xl font-bold text-center my-14">All Phone Categories</h1>
            <Phones phones={allPhones}></Phones>
        </div>
    );
};

export default Home;