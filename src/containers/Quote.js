import { useState } from 'react';

import useFetch from '../hooks/useFetch';

import Grid from '../components/Grid';
import Loading from '../components/Loading';
import Error from '../components/Error';

import QuoteAddons from './QuoteAddons';

function Quote({ quote }) {

  const [monthlyPrice, setMonthlyPrice] = useState(quote.monthlyPrice)
  const [annualPrice, setAnnualPrice] = useState(quote.annualPrice)
  const [showMonthlyPrice, setShowMonthlyPrice] = useState(true);

  const {
    data: addons,
    isLoading: isAddonsLoading,
    isSuccess: isAddonsSuccess,
    isError: isAddonsError
  } = useFetch(process.env.REACT_APP_ADDONS_API_URL);

  let addonsContent;
  if (isAddonsLoading) {
    addonsContent = <Loading />
  } else if (isAddonsSuccess) {
    console.log('addons data: ', addons)
    addonsContent = <QuoteAddons addons={addons} showMonthlyPrice={showMonthlyPrice}/>
  } else if (isAddonsError) {
    addonsContent = <Error />
  }

  const toggleShowMonthlyPrice = () => {
    setShowMonthlyPrice(prevState => !prevState);
  }

  const handlePriceUpdate = (action, monthlyPrice, annualPrice) => {
    console.log('price ready to update');
    switch (action) {
      case "add":
        setMonthlyPrice(prevPrice => prevPrice + monthlyPrice);
        setAnnualPrice(prevPrice => prevPrice + annualPrice);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Grid>
        <div>
          <div>Hey {quote.firstName}</div>
          <p>Here is your quote for Royal & Sun Alliance, {quote.address1}, {quote.address2}, {quote.address} </p>
          <p>Quote reference: {quote.quoteRef}</p>
          <p>Cover starts on {quote.startDate}</p>
        </div>
        <div>
          <div>{process.env.REACT_APP_CURRENCY_SYBMOL}{showMonthlyPrice ? monthlyPrice : annualPrice}</div>
          <div>{showMonthlyPrice ? process.env.REACT_APP_MONTHLY_PRICE_SUFFIX : process.env.REACT_APP_ANNUAL_PRICE_SUFFIX}</div>
          <p>This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.</p>
          <button onClick={toggleShowMonthlyPrice}>monthly/annual</button>
        </div>
      </Grid>


      <hr />
      <button onClick={() => handlePriceUpdate('add', 10, 10)}>Add 10 to price</button>
      <hr />

{addonsContent}

    </>
  )
}

export default Quote;
