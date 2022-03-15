import { useSelector, useDispatch } from 'react-redux';

import { toggleShowMonthlyPrice } from '../store/userQuoteSlice';

import Container from '../components/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';

const getAddressString = (quote) => {
  const addressLines = [process.env.REACT_APP_QUOTE_INTRO];
  quote.address1 && addressLines.push(quote.address1);
  quote.address2 && addressLines.push(quote.address2);
  quote.address3 && addressLines.push(quote.address3);
  return addressLines.join(", ")
}

function QuoteDetail({ quote }) {
  const monthlyPrice = useSelector(state => state.userQuote.monthlyPrice);
  const annualPrice = useSelector(state => state.userQuote.annualPrice);
  const showMonthlyPrice = useSelector(
    state => state.userQuote.showMonthlyPrice
  );
  const dispatch = useDispatch();

  return (
    <Container display="grid" gap="32" smGridTemplateColumns="1fr 1fr"
      mt="32" mb="80"
    >
      <Container display="flex" flexDirection="column" py="32" gap="32">
        <Typography as="div" fontSize="42">{process.env.REACT_APP_QUOTE_GREETING} {quote.firstName},</Typography>
        <Typography fontSize="20">
          {getAddressString(quote)}
        </Typography>
        <Typography data-test="quote-ref" fontSize="20">
          {process.env.REACT_APP_QUOTE_REF_LABEL} {quote.quoteRef}
        </Typography>
        <Typography fontSize="20">
          {`${process.env.REACT_APP_QUOTE_START_DATE_LABEL} ${new Date(quote.startDate).toLocaleDateString()}`}
        </Typography>
      </Container>

      <Container display="flex" flexDirection="column" alignItems="center"
        backgroundColor="white"
        p="32"
        borderRounded
      >
        <Typography as="div" data-test="quote-price" 
          fontSize="64"
          fontWeight="bold"
          lineHeight="1"
        >
          {process.env.REACT_APP_CURRENCY_SYBMOL}{showMonthlyPrice ? monthlyPrice.toFixed(2) : annualPrice.toFixed(2)}
        </Typography>

        <Typography fontSize="32" color="primary">
          {showMonthlyPrice
            ? process.env.REACT_APP_MONTHLY_PRICE_SUFFIX
            : process.env.REACT_APP_ANNUAL_PRICE_SUFFIX
          }
        </Typography>

        <Container
          maxWidth="440px" mt="24"
          flexGrow="1"
          display="flex" flexDirection="column" gap="24"
          justifyContent="space-between"
          alignItems="flex-end"
          width='100%'
        >

          <Typography textAlign="center">
            {process.env.REACT_APP_QUOTE_PRICE_INFO}
          </Typography>

          <Button data-test="switch-payment-terms"
            onClick={() => dispatch(toggleShowMonthlyPrice())}
            fullWidth
          >
            {showMonthlyPrice
              ? process.env.REACT_APP_QUOTE_PRICE_SWITCH_YEAR
              : process.env.REACT_APP_QUOTE_PRICE_SWITCH_MONTH
            }
          </Button>
        </Container>

      </Container>
    </Container>
  )
}

export default QuoteDetail;
