import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from 'styled-components'

import { toggleShowMonthlyPrice } from '../store/userQuoteSlice';

import Grid from '../components/Grid';
import Container from '../components/Container';
import Typography from '../components/Typography';
import Heading2 from '../components/Heading2';
import Button from '../components/Button';

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
          <Typography as="div" fontSize="42">Hey {quote.firstName}</Typography>
          <Typography fontSize="20">
            Here is your quote for Royal & Sun Alliance, {quote.address1}, {quote.address2}, {quote.address}
          </Typography>
          <Typography fontSize="20">
            Quote reference: {quote.quoteRef}
          </Typography>
          <Typography fontSize="20">
            Cover starts on {quote.startDate}
          </Typography>
        </div>
        <Container
          backgroundColor="white"
          shadow
          padding={theme.spacing.default}
        >
          <Typography as="div"
            fontSize="64"
            fontWeight="bold"
            lineHeight="1"
          >
            {process.env.REACT_APP_CURRENCY_SYBMOL}{showMonthlyPrice ? monthlyPrice.toFixed(2) : annualPrice.toFixed(2)}
          </Typography>

          <Heading2 color="primary">
            {showMonthlyPrice ? process.env.REACT_APP_MONTHLY_PRICE_SUFFIX : process.env.REACT_APP_ANNUAL_PRICE_SUFFIX}
          </Heading2>
          <Typography>
            This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.
          </Typography>
          <Button
            onClick={() => dispatch(toggleShowMonthlyPrice())}
            variant="secondary"
            fullWidth
          >
            monthly/annual
          </Button>
        </Container>
      </Grid>
    </Container>
  )
}

export default QuoteDetail;
