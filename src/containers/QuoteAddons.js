import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateAddonsSelected, updatePrice } from '../store/userQuoteSlice';

import Grid from '../components/Grid';

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
     
    dispatch(updatePrice({type: action, monthlyPrice: monthlyPrice, annualPrice: annualPrice}))
    dispatch(updateAddonsSelected({ type: CONSTANT.ACTION_TYPE_TOGGLE, id: id }))
  }

  return (
    <>
      <h1>Tailor your cover with our optional extras.</h1>
      <Grid>
        {addons.map((addon, id) => (
          <div key={id} style={{ backgroundColor: 'pink' }}>
            <h3>{addon.title}</h3>
            <div>
              {process.env.REACT_APP_CURRENCY_SYBMOL}{showMonthlyPrice ? addon.monthlyPrice.toFixed(2) : addon.annualPrice.toFixed(2)} {showMonthlyPrice ? process.env.REACT_APP_MONTHLY_PRICE_SUFFIX : process.env.REACT_APP_ANNUAL_PRICE_SUFFIX}
            </div>
            <p>{addon.text}</p>
            <button onClick={() => handleAddonToggle(id, addon.monthlyPrice, addon.annualPrice )}>
              {!addonsSelected[id] ? 'add' : 'remove'} extras
              </button>
          </div>
        )

        )}

      </Grid>
    </>
  )
}

export default QuoteAddons;
