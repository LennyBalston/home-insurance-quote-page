import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleShowMonthlyPrice, updatePrice } from '../store/userQuoteSlice';
import useFetch from '../hooks/useFetch';

import Grid from '../components/Grid';
import Loading from '../components/Loading';
import Error from '../components/Error';

import QuoteAddons from './QuoteAddons';

import { CONSTANT } from '../constants';

function Quote({ quote }) {
  const monthlyPrice = useSelector(state => state.userQuote.monthlyPrice);
  const annualPrice = useSelector(state => state.userQuote.annualPrice);
  const showMonthlyPrice = useSelector(
    state => state.userQuote.showMonthlyPrice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (quote.monthlyPrice && quote.annualPrice) {
      dispatch(updatePrice({ type: CONSTANT.ACTION_TYPE_SET, monthlyPrice: quote.monthlyPrice, annualPrice: quote.annualPrice }))
    }
  }, [quote, dispatch]);

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
    addonsContent = <QuoteAddons addons={addons} />
  } else if (isAddonsError) {
    addonsContent = <Error />
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
        <div style={{ backgroundColor: 'white' }}>
          <div>{process.env.REACT_APP_CURRENCY_SYBMOL}{showMonthlyPrice ? monthlyPrice.toFixed(2) : annualPrice.toFixed(2)}</div>
          <div>{showMonthlyPrice ? process.env.REACT_APP_MONTHLY_PRICE_SUFFIX : process.env.REACT_APP_ANNUAL_PRICE_SUFFIX}</div>
          <p>This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.</p>
          <button onClick={() => dispatch(toggleShowMonthlyPrice())}>monthly/annual</button>
        </div>
      </Grid>
      {addonsContent}
    </>
  )
}

export default Quote;
