import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from 'styled-components'

import { toggleShowMonthlyPrice } from '../store/userQuoteSlice';

import Grid from '../components/Grid';
import Container from '../components/Container';


function QuoteDetail({ quote }) {
  const monthlyPrice = useSelector(state => state.userQuote.monthlyPrice);
  const annualPrice = useSelector(state => state.userQuote.annualPrice);
  const showMonthlyPrice = useSelector(
    state => state.userQuote.showMonthlyPrice
  );
  const dispatch = useDispatch();

  const theme = useTheme();

  return (
    <Container
      mt={theme.spacing.default} mb={theme.spacing.default}
    >
      <Grid>
        <div>
          <div>Hey {quote.firstName}</div>
          <p>Here is your quote for Royal & Sun Alliance, {quote.address1}, {quote.address2}, {quote.address} </p>
          <p>Quote reference: {quote.quoteRef}</p>
          <p>Cover starts on {quote.startDate}</p>
        </div>
        <Container
          backgroundColor="white"
          shadow
          padding={theme.spacing.default}
        >
          <div>{process.env.REACT_APP_CURRENCY_SYBMOL}{showMonthlyPrice ? monthlyPrice.toFixed(2) : annualPrice.toFixed(2)}</div>
          <div>{showMonthlyPrice ? process.env.REACT_APP_MONTHLY_PRICE_SUFFIX : process.env.REACT_APP_ANNUAL_PRICE_SUFFIX}</div>
          <p>This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.</p>
          <button onClick={() => dispatch(toggleShowMonthlyPrice())}>monthly/annual</button>
        </Container>
      </Grid>
    </Container>
  )
}

export default QuoteDetail;
