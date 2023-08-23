import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="w-full h-full grid grid-rows-8 gap-5 items-center relative">
        {/* FIRST ROW */}
        <div className="w-full h-[5.5rem] grid grid-cols-[30%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[0px_58px_8px_50px]">
            <Image
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1692792657/photo-1616394584738-fc6e612e71b9_quwrwk.jpg"
              alt="Photo of an Attractive Young Woman with Tattoos Lying on a Blanket in Nature
"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 uppercase font-bold">Unleash Your</h2>
          </div>
        </div>

        <hr className="border-grey" />

        {/* SECOND ROW */}
        <div className="w-full h-[5.5rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex items-center">
            <h2
              className={cn(playfairDisplay.className, "headline-1 lowercase")}
            >
              Inner
            </h2>
          </div>

          <div className="w-full h-full overflow-hidden rounded-[50px_0px_50px_50px]">
            <Image
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1692805704/woman-4837854_1280_e1mmnp.jpg"
              alt="Woman Holding Pink Petaled Flower"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 uppercase font-bold">
              Elegance<span className="text-green">.</span>
            </h2>
          </div>
        </div>

        <hr className="border-grey" />

        {/* THIRD ROW */}
        <div className="w-full h-[5.5rem] grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 uppercase font-semibold">Eternal</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1692805257/fashion-835219_1280_apyr2s.jpg"
              alt="Woman Holding Pink Petaled Flower"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <hr className="border-grey" />

        {/* FOURTH ROW */}
        <div className="w-full h-[5.5rem] grid grid-cols-[35%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[50px_50px_50px_0px]">
            <Image
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1692807176/pexels-photo-1308881_f7rwiy.jpg"
              alt="Woman Holding Pink Petaled Flower"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 uppercase font-semibold">
              <span
                className={cn(
                  playfairDisplay.className,
                  "lowercase font-normal"
                )}
              >
                with
              </span>{" "}
              M
              <span
                className={cn(
                  playfairDisplay.className,
                  "lowercase font-normal text-pink"
                )}
              >
                i
              </span>
              mosa<span className="text-orange">.</span>
            </h2>
          </div>
        </div>

        <hr className="border-grey" />

        {/* Packages Button */}
        <Link
          href="/#packages"
          className=" text-lg bg-dark text-light w-40 h-40 rounded-full overflow-hidden flex justify-center items-center uppercase absolute left-[33%] -bottom-[5%] z-[1] group shadow-2xl shadow-dark/50 hover:shadow-violet/50 eq "
        >
          <p className="z-[3]">Packages</p>

          {/* FILLER 1 */}
          <span className="z-[2] absolute top-full left-0 right-0 bottom-0 w-full h-1/2 bg-violet group-hover:top-1/2 eq"></span>

          {/* FILLER 2 */}
          <span className="z-[2] absolute -top-full left-0 right-0 bottom-0 w-full h-1/2 bg-violet group-hover:top-0 eq"></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
