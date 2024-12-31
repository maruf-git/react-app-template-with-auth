import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* header section */}
            <header>
                <nav>
                    {/* <Navbar></Navbar> */}
                    <Navbar></Navbar>
                </nav>
            </header>
            {/* main section */}
            <main>
                <Outlet></Outlet>
            </main>
            {/* footer section */}
        </div>
    );
};

export default MainLayout;