const OffersShimmer = () => {
  return (
    <>
      <div className='h-9 my-4'></div>
      <div className='flex flex-wrap justify-center w-full my-2'>
        {Array(10)
          .fill('')
          .map((item, index) => (
            <div
              key={index}
              className='animate-pulse w-[268px] h-[268px] m-4 p-6 border-2 bg-[#d3d3d3]'
            ></div>
          ))}
      </div>
    </>
  );
};

export default OffersShimmer;
