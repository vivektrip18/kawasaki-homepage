import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { BikeTile } from "../components/BikeTile";

import kawasaki_w230 from "../images/25my-kawasaki-w230-ew-desktop-1920x960px.jpeg"
import eliminator_500 from "../images/25my-eliminator-500-ew-desktop-1920x1152px.jpeg"
import ninja_zx4rr from "../images/25my-ninja-zx4rr-riding-ew-desktop-1920x1152px.jpeg"
import versys_1100 from "../images/25my-versys-1100-ew-desktop.jpeg"
import z650 from "../images/25my-z650-riding-ew-desktop-1920x1152.jpeg"
import meguros1 from "../images/meguros1-desktop-1020x960.jpeg"
import ninja_h2r from "../images/ninja_h2r.png"
import zh2se from "../images/2025_zh2se.png"
import ninjah2sx from "../images/2025_ninjah2sx.png"
import meguro from "../images/meguro.png"
import z7hybrid from "../images/z7hybrid.png"
import ninja7hybrid from "../images/ninja7hybrid.png"
import { Navbar } from "../components/Navbar";


export const HomePage = () => {
    const bikeLinks = ["https://www.kawasaki.eu/en/Motorcycles/Hypersport/Ninja_H2R_2025.html",
        "https://www.kawasaki.eu/en/Motorcycles/Supernaked/zh2_se_2025.html",
        "https://www.kawasaki.eu/en/Motorcycles/Sport_Tourer/ninja_h2_sx_2025.html",
        "https://www.kawasaki.eu/en/Motorcycles/Classic/Meguro_s1_2025.html",
        "https://www.kawasaki.eu/en/Motorcycles/EV_HEV/Z_7_Hybrid.html",
        "https://www.kawasaki.eu/en/Motorcycles/EV_HEV/Ninja_7_Hybrid.html"
    ]

    return <div >
        <Navbar/>
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                navigation={{
                    enabled: true,
                    clickable: true
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                keyboard={{
                    enabled: true
                }}
                pagination={{
                    clickable: true
                }}
                modules={[Keyboard, Navigation, Pagination, Autoplay]}
                className="mySwiper">
                <SwiperSlide className="relative">
                    <img src={kawasaki_w230} />
                    <button className="absolute  left-10 bottom-20  left-4 bg-gray-900 font-mono text-white hover:text-green-500 py-2 px-4 border-2 border-green-500 text-sm ">Discover More</button>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={eliminator_500} />
                    <button className="absolute left-30 bottom-20 left-4 bg-gray-900 font-mono text-white hover:text-green-500 py-2 px-4 border-2 border-green-500 text-sm ">Discover More</button>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={ninja_zx4rr} />
                    <button className="absolute left-30 bottom-20 left-4 bg-gray-900 font-mono text-white hover:text-green-500 py-2 px-4 border-2 border-green-500 text-sm ">Discover More</button>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={versys_1100} />
                    <button className="absolute left-30 bottom-20 left-4 bg-gray-900 font-mono text-white hover:text-green-500 py-2 px-4 border-2 border-green-500 text-sm ">Discover More</button>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={z650} />
                    <button className="absolute left-30 bottom-20 left-4 bg-gray-900 font-mono text-white hover:text-green-500 py-2 px-4 border-2 border-green-500 text-sm ">Discover More</button>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img src={meguros1} />
                    <button className="absolute  left-30 bottom-20 left-4 bg-gray-900 font-mono text-white hover:text-green-500 py-2 px-4 border-2 border-green-500 text-sm ">Discover More</button>
                </SwiperSlide>


            </Swiper>
        </div>
        <div>
            <div className="font-black text-6xl font-mono mt-10 ml-5 border-b-2 border-green-500 ">
                Featured Vehicles
            </div>
            <div className="grid grid-cols-2 gap-10 md:grid-cols-3">

                <BikeTile
                    src={ninja_h2r}
                    name="Ninja H2R|2024"
                    link={bikeLinks[0]}
                     />
                <BikeTile
                    src={zh2se}
                    name=" Z H2 SE|2025" 
                    link={bikeLinks[1]}/>
                <BikeTile
                    src={ninjah2sx}
                    name="Ninja H2 SX|2025"
                    link={bikeLinks[2]} />
                <BikeTile
                    src={meguro}
                    name="Meguro S1|2025"
                    link={bikeLinks[3]} />
                <BikeTile
                    src={z7hybrid}
                    name="Z7 Hybrid|2024"
                    link={bikeLinks[4]} />
                <BikeTile
                    src={ninja7hybrid}
                    name="Ninja 7 Hybrid|2024"
                    link={bikeLinks[5]} />
              
            </div>

        </div>
    </div>
}