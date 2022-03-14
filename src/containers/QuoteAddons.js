import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateAddonsSelected, updatePrice } from '../store/userQuoteSlice';

import Container from '../components/Container';
import Typography from '../components/Typography';
import Heading1 from '../components/Heading1';
import Heading2 from '../components/Heading2';
import Button from '../components/Button';

import { CONSTANT } from '../constants';

function QuoteAddons({ addons }) {

  const addonsSelected = useSelector(
    state => state.userQuote.addonsSelected
  );
  const showMonthlyPrice = useSelector(
    state => state.userQuote.showMonthlyPrice
  );
  const dispatch = useDispatch();

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
      <Heading1 as="h1" pb="32" >{process.env.REACT_APP_ADDONS_HEADING}</Heading1>
      <Container display="grid" mb="32" gap="32" smGridTemplateColumns="1fr 1fr">
        {addons.map((addon, id) => (

          <Container key={id} 
            display="grid"
            rowGap="42"
            columnGap="default"
            backgroundColor="white"
            p="default"
            borderRounded
            borderColor={addonsSelected[id] ? 'secondary' : 'white'}
          >
            <Heading2 alignSelf="baseline">{addon.title}</Heading2>

            <Typography 
              color="primary"
              textAlign="right"
              justifySelf="end"
              alignSelf="baseline"
            >
              {process.env.REACT_APP_CURRENCY_SYBMOL}{showMonthlyPrice ? addon.monthlyPrice.toFixed(2) : addon.annualPrice.toFixed(2)} {showMonthlyPrice ? process.env.REACT_APP_MONTHLY_PRICE_SUFFIX : process.env.REACT_APP_ANNUAL_PRICE_SUFFIX}
            </Typography>

            <Typography as="p" gridColumn="span 2">
              {addon.text}
            </Typography>

            <Container
              gridColumn="span 2"
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button title={!addonsSelected[id] ? 'add ' + addon.title : 'remove ' + addon.title} variant={!addonsSelected[id] ? 'secondary' : 'tertiary'}
                onClick={() => handleAddonToggle(
                  id, addon.monthlyPrice, addon.annualPrice
                )}>
                {!addonsSelected[id]
                  ? process.env.REACT_APP_ADDONS_SELECT
                  : process.env.REACT_APP_ADDONS_REMOVE
                }
              </Button>
            </Container>

          </Container>
        )

        )}

      </Container>
    </>
  )
}

export default QuoteAddons;
