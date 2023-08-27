import Image from 'next/image';

const Cumminity = () => {
  return (
    <section className='wrapper section-padding mt-20 h-screen '>
      <div className='flex h-full w-full items-center justify-center'>
        {/* MAIN BOX */}
        <div className='relative mt-10 h-[500px] w-[500px]'>
          {/* LEFT BOX */}
          <div className='absolute -left-[15%] -top-[15%] z-[2] h-[400px] w-[300px] overflow-hidden rounded-tl-[100px] '>
            <Image
              src='https://images.pexels.com/photos/1906815/pexels-photo-1906815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman Standing Beside Brown Grass'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* MID BOX */}
          <div className='absolute left-[50%] top-[50%] z-[3] h-[400px] w-[350px] -translate-x-1/2 -translate-y-1/2 overflow-hidden '>
            <Image
              src='https://images.pexels.com/photos/5938539/pexels-photo-5938539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Calm African American female in bathrobe touching face against blue background
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
        </div>
      </div>
    </section>
  );
};

export default Cumminity;
