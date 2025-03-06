import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
     {/* Image container  */}
     <div className="h-1/2 relative">
          <Image src="/hero.png" alt="shahzad akram" fill className="object-contain"/>
     </div>

     {/* text container  */}
     <div className="h-1/2 flex flex-col justify-center items-center gap-8">
          {/* TiTle */}
          <h1 className="text-4xl font-bold">
             Crafting Digital Experiences, Designing Tommorow
          </h1>
          {/* desc  */}
          <p>
            Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics
          </p>

          <div className="flex gap-4">
            <button className="p-4 bg-black text-white rounded-lg ring-1 ring-white">
                  View my Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
                  Contact me
            </button>
          </div>
     </div>
  </div>;
};

export default Homepage;
