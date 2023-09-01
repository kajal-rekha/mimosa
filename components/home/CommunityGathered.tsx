import Image from 'next/image';

const CommunityGathered = () => {
  return (
    <section className='section-padding-2 mt-20 min-h-screen bg-dark'>
      <div className='wrapper flex h-full w-full items-center justify-center'>
        {/* BLOCKS */}
        <div className='relative grid h-[1000px] w-[1000px] grid-cols-10 bg-violet'>
          {Array.from({ length: 100 }).map((_, index) => (
            // OUTER BLOCK
            <div key={index} className='group z-[3] h-full w-full'>
              {/* INNER BLOCK */}
              <div className='eq invisible h-full w-full bg-orange opacity-50 group-hover:visible group-hover:opacity-100'></div>
            </div>
          ))}
          {/* OVERLAY */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-orange/20'></div>
          {/* IMAGE */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full overflow-hidden bg-red'>
            <Image
              src='https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Women White Framed Sunglasses'
              width={1000}
              height={1000}
              className='h-full w-full object-cover'
            />
          </div>
          {/* UPPER LEFT TEXT */}
          <div className='absolute -left-[10%]  top-[10%] z-[3] w-[65%] text-5xl font-semibold uppercase text-light'>
            {`Join now to grab the`}
            <span className='text-orange'>{`"Mimosa Beauty Pass"`}</span>
            {` for
            all services at once!`}
          </div>
          {/* BOTTOM RIGHT TEXT */}
          <div className='absolute -right-[10%] bottom-[10%] z-[3] w-[65%] text-right text-5xl uppercase text-light'>
            {`3-month subscription,`} <span className='text-orange'>$300.</span>{' '}
            {`Limited time - join us today!`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGathered;
