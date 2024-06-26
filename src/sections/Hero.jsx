import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { basic1, whatsapp } from "../assets/images";
import { bikes, statistics } from "../constants";
import BikeCard from "../components/BikeCard";
// import Typed from 'react-typed';
import { useState } from "react";

const Hero = () => {
  const [bigBikeImg, setbigBikeImg] = useState(basic1);
  return (
    <section
      id="home"
      className="w-full border flex xl:flex-row flex-col min-h-screen
     gap-5 max-container bg-white"
    >
      <div className="relative xl:w-1/3 flex flex-col justify-center items-start w-full padding-x pt-14">
        <p className="font-bold text-xl text-red-700">M.A.Aqeel</p>
        <h1 className="mt-8 font-palanque sm:text-8xl font-bold text-7xl">
          FABTECH
          {/* <Typed
                    strings={['New Arrival','Brand New']}
                    typeSpeed={100}
                    backSpeed={30}
                    loop
                /> */}
          <br />
          <spam className="text-red-700">MOBILE </spam>SOLUTION
        </h1>
        <p className="mt-5 text-xl font-montserrat">
          Master mobile repair with our Android and iOS coaching. Also, rely on
          us for top-notch repair services!
        </p>
        <Button className="mt-5 " lable="Whatsapp us" iconURL={arrowRight} />

        <div className="flex justify-center items-start felx-wrap w-full mt-20 gap-16">
          {statistics.map((start) => (
            <div key={start.label}>
              <p className="sm:text-4xl text-2xl font-palanquin font-semibold ">
                {start.value}
              </p>
              <p className="leading-7 font-semibold ">{start.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 sm:bg-blue-500 lg:bg-transparent  ">
        <img
          src={bigBikeImg}
          alt="shoe"
          width={510}
          height={402}
          className="object-contain relative z-10 "
        />
        {/* service images 280 by 280 pxls */}
        {/* small pics 200 by 112 */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[1%] lg:right-[20%] sm:left-[10%] max-sm:px-6 md:px-6">
          {bikes.map((bike) => (
            <div key={bike}>
              <BikeCard
                imgURL={bike}
                changeBigBike={(bike) => setbigBikeImg(bike)}
                bigBikeImg={bigBikeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
