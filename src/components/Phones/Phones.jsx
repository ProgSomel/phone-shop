/* eslint-disable react/prop-types */
import useGetPhones from "../../hook/useGetPhones";
import Phone from "../Phone/Phone";

const Phones = ({phones}) => {
    
    const [getDataFromHook] = useGetPhones();
    console.log(getDataFromHook);
    
    return (
        <div className="grid gap-y-5 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            {
                phones.map((phone) => <Phone key={phone.id} phone={phone}></Phone>)
            }
        </div>
    );
};

export default Phones;