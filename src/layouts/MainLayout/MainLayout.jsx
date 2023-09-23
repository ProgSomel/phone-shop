import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;