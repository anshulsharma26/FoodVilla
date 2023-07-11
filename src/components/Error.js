import { useRouteError } from 'react-router-dom';
import errorImage from '../assets/img/error.webp';
const Error = () => {
  const err = useRouteError();

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <img className='w-[500px]' src={errorImage} alt='not found' />
      <h1>Uh-oh!</h1>
      <h2>Something went wrong!!</h2>
      <h2>
        {err.status} - {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
