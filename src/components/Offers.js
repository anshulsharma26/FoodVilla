import { useState, useEffect } from 'react';
import { OFFERS_URL } from '../constants';
import OfferCard from './OfferCard';
import OffersShimmer from './OffersShimmer';

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers();
  }, []);

  async function getOffers() {
    const data = await fetch(OFFERS_URL);
    const json = await data.json();
    setOffers(json.data.cards);
  }

  return offers.length === 0 ? (
    <OffersShimmer />
  ) : (
    <>
      <h1 className='my-4 text-center text-3xl font-bold font-serif'>
        Offers for you
      </h1>
      <div className='flex flex-wrap justify-center w-full my-2'>
        {offers.slice(2).map((offer, index) => {
          return <OfferCard key={index} {...offer?.data?.data} />;
        })}
      </div>
    </>
  );
};
export default Offers;
