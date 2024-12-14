import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="w-full h-screen ">
      <div className="h-full Photo bg-background bg-no-repeat bg-cover flex flex-col gap-60 justify-center ">
        

        <div className="flex flex-col gap-16 justify-center items-center">
          <p className="text-white text-2xl text-center font-bgfont tracking-widest font-bold uppercase ">
            Uncover your top music trends and hidden listening <br />
            habits with SpotStat
          </p>
          <button className="text-white border-2 p-2 px-10 rounded-[50px] hover:bg-purple-500 ease-out duration-300 hover:scale-[1.2]"><Link to="/General">Get Started</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
