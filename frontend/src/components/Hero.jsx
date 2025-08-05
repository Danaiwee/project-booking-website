const Hero = () => {
  return (
    <section className='w-full h-[40vh] bg-[url(/th_bg1.jpg)] bg-cover bg-center overflow-hidden'>
      <div className='w-full h-full bg-black/60 backdrop-blur-none flex items-center px-5'>
        <div className='w-full max-w-7xl h-full mx-auto flex flex-col justify-center gap-5 px-5 lg:px-0'>
          <div>
            <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white'>
              A place to call home
            </h1>
            <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white'>
              on your next adventure
            </h1>
          </div>

          <p className='text-white font-medium text-md md:text-2xl'>
            Discover dreamy villas, houses, hotels, & more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
