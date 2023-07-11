import { TypeAnimation } from 'react-type-animation';
import banner from '../assets/img/banner.jpg';
const Banner = () => {
  return (
    <div
      className='w-full h-32 py-[54px] px-1 sm:h-60 sm:py-16 sm:px-4 lg:h-[270px] lg:p-16'
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='font-mono text-sm text-white sm:text-xl lg:text-2xl xl:text-3xl'>
        <TypeAnimation
          sequence={[
            'Deliciously Delivered, Anytime, Anywhere!',
            2000,
            "Food at Your Fingertips: The Ultimate Delivery Experience!",
            2000,
          ]}
          cursor={true}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Banner;
