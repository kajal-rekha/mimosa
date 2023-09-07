import Image from 'next/image';
import Link from 'next/link';

const Community = () => {
  return (
    <section className='wrapper section-padding mt-20 h-screen'>
      <div className='relative flex h-full w-full items-center justify-center '>
        {/* MAIN BOX */}
        <div className='relative mt-10 h-[500px] w-[500px] bg-gray'>
          {/* LEFT BOX */}
          <div className='absolute -left-[15%] -top-[15%] z-[2] h-[400px] w-[300px] overflow-hidden rounded-tl-[100px] '>
            <Image
              src='https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Smiling Woman With Red Hair
'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* MID BOX */}
          <div className='absolute left-[50%] top-[50%] z-[3] h-[400px] w-[350px] -translate-x-1/2 -translate-y-1/2 overflow-hidden '>
            <Image
              src='https://images.pexels.com/photos/1989297/pexels-photo-1989297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Standing Woman in Gray Sweater Behind Plants
'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* RIGHT BOX */}

          <div className='absolute -bottom-[15%] -right-[25%] z-[2] h-[400px] w-[300px] overflow-hidden rounded-br-[100px] '>
            <Image
              src='https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Photo Of Woman Wearing White Shirt'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* UPPER RIGHT TEXT */}
          <h2 className='headline-1 absolute -top-[14%] left-[48%] z-[2] whitespace-nowrap font-bold uppercase'>
            Join mimosa
          </h2>
          {/* BOTTOM LEFT TEXT */}
          <h2 className='headline-1 absolute -bottom-[14%] right-[40%] z-[2] font-bold uppercase'>
            Community
          </h2>
        </div>

        {/* join Button */}
        <Link
          href='/#packages'
          className=' eq group absolute -bottom-[15%] right-[4%] z-[1] flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-lg uppercase text-light shadow-2xl shadow-dark/50 hover:shadow-red/50'
        >
          <p className='z-[3]'>Join Now</p>

          {/* FILLER 1 */}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-red group-hover:top-1/2'></span>

          {/* FILLER 2 */}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-red group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Community;
