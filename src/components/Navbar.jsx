import logo from "../images/logo.png"
import globe_icon from  "../images/globe_icon.png"
import location_pin from  "../images/location_pin.png"
import search_icon from "../images/search-icon.png"

export const Navbar = () => {
    

    return <div >
        <nav className=" fixed top-0 left-0 right-0 z-50  bg-white">
            <div className="  flex flex-wrap  items-center justify-between mx-auto border-b-4 border-green-500 ">

                <a href="/" className="flex items-center space-x-3 ml-6 ">
                    <img src={logo} className="h-8" alt="Kawasaki logo" />
                    <span className="self-center text-2xl font-semibold font-mono "></span>
                </a>
                <div className="flex items-center space-x-4 mr-6">

                    <a href="#" className="hover:underline decoration-1 decoration-green-500   text-gray-700 flex font-mono font-bold tracking-tighter pr-2 hover:text-gray-600">
                        <img src={location_pin} className="w-5 h-5" />
                        Find a dealer
                    </a>
                    |
                    <a href="#" className="hover:underline decoration-1 decoration-green-500 text-gray-700 flex font-mono tracking-tighter font-bold  pr-3 hover:text-gray-600">
                        <img src={globe_icon} className="w-5 h-5" />
                        India | EN
                    </a>
                    |
                    <a href="#">
                        <img src={search_icon} className=" w-5 h-5 hover:border-b-2 border-green-500 mr-2" />
                    </a>
                </div>

            </div>
            <div className="bg-customGray lg:flex flex-wrap   ">
                <a className="flex text-slate-100 ml-10 pb-2 font-bold  pt-2 pl-4 pr-4 text-xl font-mono tracking-tighter border-r-2 border-l-2 hover:bg-gray-900 hover:text-green-500 "
                    href="#">
                    MOTORCYCLES
                </a>

                <a className="flex text-slate-100 hover:bg-gray-900 font-bold hover:text-green-500 pt-2 pl-4 pr-4  text-xl font-mono tracking-tighter border-r-2"
                    href="#">
                    OTHER VEHICLES
                </a>
                <a className="flex text-slate-100 pl-2 border-r-2 font-bold hover:bg-gray-900 hover:text-green-500 pt-2 pl-4 pr-4  text-xl font-mono tracking-tighter"
                    href="#">
                    PARTS & ACCESSORIES
                </a>
                <a className="flex text-slate-100 pl-2 border-r-2 font-bold hover:bg-gray-900 hover:text-green-500 pt-2 pl-4 pr-4  text-xl font-mono tracking-tighter"
                    href="#">
                    SERVICE
                </a>
                <a className="flex text-slate-100 pl-2 border-r-2 font-bold hover:bg-gray-900 hover:text-green-500 pt-2 pl-4 pr-4  text-xl font-mono tracking-tighter"
                    href="#">
                    RACING
                </a>
                <a className=" flex text-slate-100 pl-2 font-bold  hover:bg-gray-900 hover:text-green-500 pt-2 pl-4 pr-4  text-xl font-mono tracking-tighter"
                    href="#">
                    NEWS
                </a>
            </div>

        </nav>



    </div>
}