import { useSelector, useDispatch } from 'react-redux';

import { toggleShowMonthlyPrice} from '../store/userQuoteSlice';

import Grid from '../components/Grid';


function QuoteDetail({ quote }) {
  const monthlyPrice = useSelector(state => state.userQuote.monthlyPrice);
  const annualPrice = useSelector(state => state.userQuote.annualPrice);
  const showMonthlyPrice = useSelector(
    state => state.userQuote.showMonthlyPrice
  );
  const dispatch = useDispatch();

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
    </>
  )
}

export default QuoteDetail;
