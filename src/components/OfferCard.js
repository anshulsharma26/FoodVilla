import { OFFER_IMG_URL } from '../constants';
import { BiTime } from 'react-icons/bi';
const OfferCard = (props) => {
  const { couponCode, logo, title, description, validTill } = props;
  return logo == null ? null : (
    <div className='w-[268px] h-[268px] flex flex-col justify-between m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]'>
      <div className='flex justify-center items-center p-2 rounded-[5px] bg-[#ffc0cb]'>
        <img loading='lazy' className='w-8' src={OFFER_IMG_URL + logo} />
        <h1 className='m-1 font-medium text-base'>{couponCode}</h1>
      </div>
      <p className='font-bold'>{title}</p>
      <p>{description}</p>
      <div className='flex justify-center items-center'>
        <BiTime fontSize='large' color='#4e4d4d' />
        <p className='ml-[2px]'>{validTill}</p>
      </div>
    </div>
  );
};

export default OfferCard;
