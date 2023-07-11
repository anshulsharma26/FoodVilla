const MenuShimmer = () => {
  return (
    <div className='flex-1'>
      <div className='animate-pulse h-[210px] w-full bg-[#d3d3d3]'></div>
      <div className='m-2'>
        <div className='h-8'></div>
        <div className='flex flex-col max-w-[1200px] w-full mx-auto'>
          {Array(2)
            .fill('')
            .map((item, index) => (
              <div
                key={index}
                className='animate-pulse bg-[#d3d3d3] flex justify-between h-[170px] mb-6 p-4 rounded-md border-2 border-[#e7e9ed]'
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MenuShimmer;
