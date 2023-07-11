import { IMG_CDN_URL } from '../constants';
import { AiFillStar } from 'react-icons/ai';

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
  } = props;
  return (
    <div className='m-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px] cursor-pointer'>
      {cloudinaryImageId ? (
        <img
          className='w-full rounded-t-[5px]'
          loading='lazy'
          src={IMG_CDN_URL + cloudinaryImageId}
          alt='image'
        />
      ) : (
        <div className='w-[268px] h-[168px] bg-gray-300'></div>
      )}
      <div className='my-2'>
        <div className='px-2 text-base font-bold text-[#282c3f]'>{name}</div>
        <div className='h-[48px] w-auto px-2 pt-1 text-sm text-[#686b78] break-words whitespace-normal line-clamp-2'>
          {cuisines.join(', ')}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px',
          fontSize: '12px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <AiFillStar
            fontSize='large'
            color={avgRating >= 4 ? '#48c479' : '#db7c38'}
          />
          <span style={{ fontWeight: 700 }}>{avgRating}</span>
        </div>
        <div>•</div>
        <div>{deliveryTime} MINS</div>
        <div>•</div>
        <div>{costForTwoString}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
