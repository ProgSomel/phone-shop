import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useEffect } from "react";

const MainLayout = () => {

    const loc = useLocation();
    console.log(loc);

    useEffect(()=> {
        if(loc.pathname === '/') {
            document.title= `SRH Phone-Home`;
        }
        else {
            document.title= `SRH Phone ${loc.pathname.replace("/", "-")}`;
        }
        if(loc.state) {
            document.title= `${loc.state}`;
        }
    }, [loc.pathname])

    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;