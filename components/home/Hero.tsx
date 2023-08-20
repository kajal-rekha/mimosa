import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="w-full h-full grid grid-rows-8 gap-5 items-center">
        {/* FIRST ROW */}
        <div className="w-full h-[8rem]  grid grid-cols-[30%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[0px_58px_8px_50px]">
            <Image
              src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman Holding Pink Petaled Flower"
              width={640}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="text-7xl uppercase font-semibold">
              Lorem ipsum DOLER
            </h2>
          </div>
        </div>

        <hr className="border-grey" />

        {/* SECOND ROW */}
        <div className="w-full h-[8rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            {" "}
            <h2 className="text-7xl uppercase font-semibold">Lorem I</h2>
          </div>

          <div className="w-full h-full overflow-hidden rounded-[50px_0px_50px_50px]">
            <Image
              src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman Holding Pink Petaled Flower"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full flex items-center">
            <h2 className="text-7xl uppercase font-semibold">Lorem IPSUM DO</h2>
          </div>
        </div>

        <hr className="border-grey" />

        {/* THIRD ROW */}
        <div className="w-full h-[8rem] grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="text-7xl uppercase font-semibold">Lorem IPSUM </h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman Holding Pink Petaled Flower"
              width={12800}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <hr className="border-grey" />

        {/* FOURTH ROW */}
        <div className="w-full h-[8rem] grid grid-cols-[35%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[50px_50px_50px_0px]">
            <Image
              src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman Holding Pink Petaled Flower"
              width={12800}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="text-7xl uppercase font-semibold">
              Lorem IPSUM DOLLE
            </h2>
          </div>
        </div>

        <hr className="border-grey" />
      </div>
    </section>
  );
};

export default Hero;
