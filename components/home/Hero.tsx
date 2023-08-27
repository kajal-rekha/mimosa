import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-5rem)]'>
      <div className='grid-rows-8 relative grid h-full w-full items-center gap-5'>
        {/* FIRST ROW */}
        <div className='grid h-[8rem] w-full grid-cols-[30%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[0px_58px_8px_50px]'>
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1692792657/photo-1616394584738-fc6e612e71b9_quwrwk.jpg'
              alt='Photo of an Attractive Young Woman with Tattoos Lying on a Blanket in Nature
'
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>Unleash Your</h2>
          </div>
        </div>

        <hr className='border-gray' />

        {/* SECOND ROW */}
        <div className='grid h-[8rem] w-full grid-cols-[25%_auto_50%] gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2
              className={cn(playfairDisplay.className, 'headline-1 lowercase')}
            >
              Inner
            </h2>
          </div>

          <div className='h-full w-full overflow-hidden rounded-[50px_0px_50px_50px]'>
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1692805704/woman-4837854_1280_e1mmnp.jpg'
              alt='Woman Holding Pink Petaled Flower'
              width={320}
              height={180}
              className='h-full w-full object-cover'
            />
          </div>

          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>
              Elegance<span className='text-green'>.</span>
            </h2>
          </div>
        </div>

        <hr className='border-gray' />

        {/* THIRD ROW */}
        <div className='grid h-[8rem] w-full grid-cols-[40%_auto] gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-semibold uppercase'>Eternal</h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1692805257/fashion-835219_1280_apyr2s.jpg'
              alt='Woman Holding Pink Petaled Flower'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        <hr className='border-gray' />

        {/* FOURTH ROW */}
        <div className='grid h-[8rem] w-full grid-cols-[35%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[50px_50px_50px_0px]'>
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1692807176/pexels-photo-1308881_f7rwiy.jpg'
              alt='Woman Holding Pink Petaled Flower'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-semibold uppercase'>
              <span
                className={cn(
                  playfairDisplay.className,
                  'font-normal lowercase'
                )}
              >
                with
              </span>{' '}
              M
              <span
                className={cn(
                  playfairDisplay.className,
                  'font-normal lowercase text-pink'
                )}
              >
                i
              </span>
              mosa<span className='text-orange'>.</span>
            </h2>
          </div>
        </div>

        <hr className='border-gray' />

        {/* Packages Button */}
        <Link
          href='/#packages'
          className=' eq group absolute -bottom-[36%] left-[34%] z-[1] flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-dark text-lg uppercase text-light shadow-2xl shadow-dark/50 hover:shadow-violet/50'
        >
          <p className='z-[3]'>Packages</p>

          {/* FILLER 1 */}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-violet group-hover:top-1/2'></span>

          {/* FILLER 2 */}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-violet group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
