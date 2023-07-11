const Shimmer = () => {
  return (
    <>
      <div className='w-full h-12 flex justify-center mt-4'></div>
      <div
        data-testid='shimmer'
        className='flex flex-wrap justify-center max-w-[1200px] w-full my-0 mx-auto'
      >
        {Array(15)
          .fill('')
          .map((item, index) => (
            <div
              key={index}
              className='animate-pulse w-[268px] h-[312px] m-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px] cursor-pointer'
            >
              <div className='w-full h-[180px] rounded-t-[5px] bg-[#d3d3d3]'></div>
              <div className='w-[95%] h-4 my-4 mx-2 bg-[#d3d3d3]'></div>
              <div className='w-[95%] h-4 my-4 mx-2 bg-[#d3d3d3]'></div>
              <div className='w-[25%] h-4 my-4 mx-2 bg-[#d3d3d3]'></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
