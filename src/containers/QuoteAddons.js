import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import { updateAddonsSelected, updatePrice } from '../store/userQuoteSlice';

import Grid from '../components/Grid';
import Container from '../components/Container';
import Typography from '../components/Typography';
import Heading1 from '../components/Heading1';
import Heading2 from '../components/Heading2';

import { CONSTANT } from '../constants';

function QuoteAddons({ addons }) {

  const addonsSelected = useSelector(
    state => state.userQuote.addonsSelected
  );
  const showMonthlyPrice = useSelector(
    state => state.userQuote.showMonthlyPrice
  );
  const dispatch = useDispatch();

  const theme = useTheme();

  useEffect(() => {
    dispatch(updateAddonsSelected({ type: CONSTANT.ACTION_TYPE_SET, addons: addons }))
  }, [dispatch, addons]);

  const handleAddonToggle = (id, monthlyPrice, annualPrice) => {
    let action = ''
    if (!addonsSelected[id]) {
      action = CONSTANT.ACTION_TYPE_ADD
    } else {
      action = CONSTANT.ACTION_TYPE_REMOVE
    }

    dispatch(updatePrice({ type: action, monthlyPrice: monthlyPrice, annualPrice: annualPrice }))
    dispatch(updateAddonsSelected({ type: CONSTANT.ACTION_TYPE_TOGGLE, id: id }))
  }

  return (
    <>
      <Heading1 as="h1">Tailor your cover with our optional extras.</Heading1>
      <Grid>
        {addons.map((addon, id) => (
          <Container
            key={id}
            backgroundColor="white"
            shadow
            padding={theme.spacing.default}
          >
            <Heading2>{addon.title}</Heading2>

            <Typography color="primary">
              {process.env.REACT_APP_CURRENCY_SYBMOL}{showMonthlyPrice ? addon.monthlyPrice.toFixed(2) : addon.annualPrice.toFixed(2)} {showMonthlyPrice ? process.env.REACT_APP_MONTHLY_PRICE_SUFFIX : process.env.REACT_APP_ANNUAL_PRICE_SUFFIX}
            </Typography>

            <Typography as="p">{addon.text}</Typography>

            <button onClick={() => handleAddonToggle(id, addon.monthlyPrice, addon.annualPrice)}>
              {!addonsSelected[id] ? 'add' : 'remove'} extras
            </button>

          </Container>
        )

        )}

      </Grid>
    </>
  )
}

export default QuoteAddons;
