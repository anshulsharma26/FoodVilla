import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, getTotalAmount } from '../utils/cartSlice';
import { MENU_IMG_CDN_URL } from '../constants';

const CartItems = (props) => {
  const { id, name, price, defaultPrice, imageId, isVeg } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(getTotalAmount());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    dispatch(getTotalAmount());
  };
  return (
    <div className='flex justify-between mb-6 p-4 rounded-md border-2 border-[#e7e9ed] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s]'>
      <div className='w-[calc(100%_-_140px)]'>
        <div
          className={
            isVeg
              ? 'flex justify-center items-center w-4 h-4 border-2 border-green-600'
              : 'flex justify-center items-center w-4 h-4 border-2 border-red-600'
          }
        >
          <span
            className={
              isVeg
                ? 'w-2 h-2 rounded-full bg-green-600'
                : 'w-2 h-2 rounded-full bg-red-600'
            }
          ></span>
        </div>
        <div className='mt-2 font-bold text-base'>{name}</div>
        <div className='mt-2 font-mono'>₹{(price || defaultPrice) / 100}</div>
      </div>
      <div className='ml-2 w-[118px] h-[120px] relative'>
        <div className='w-[118px] h-24'>
          {imageId === '' ? (
            <img
              loading='lazy'
              className='w-[118px] h-24 rounded-lg object-cover'
              src='https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg'
            />
          ) : (
            <img
              loading='lazy'
              className='w-[118px] h-24 rounded-lg object-cover'
              src={MENU_IMG_CDN_URL + imageId}
            />
          )}
        </div>

        <div className='absolute top-[72px] left-[50%] w-24 h-9 translate-x-[-50%] flex items-center justify-around bg-lime-500 hover:bg-lime-600 rounded text-sm text-white font-bold'>
          <button
            className='p-2'
            onClick={() =>
              cartItems[id]?.quantity && handleRemoveItem({ ...props })
            }
          >
            <span>-</span>
          </button>
          <div>
            <span>{cartItems[id]?.quantity || 0}</span>
          </div>
          <button
            className='p-2 z-30'
            onClick={() => handleAddItem({ ...props })}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
