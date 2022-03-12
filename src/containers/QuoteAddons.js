import Grid from '../components/Grid';

function QuoteAddons({addons, showMonthlyPrice}) {
  return (
    <Grid>
    {addons.map((addon, id) => (
          <div key={id}>
          <h3>{addon.title}</h3>
          <div>
            {process.env.REACT_APP_CURRENCY_SYBMOL}{showMonthlyPrice ? addon.monthlyPrice : addon.annualPrice} {showMonthlyPrice ? process.env.REACT_APP_MONTHLY_PRICE_SUFFIX : process.env.REACT_APP_ANNUAL_PRICE_SUFFIX}
            </div>
          <p>{addon.text}</p>
          <button>Select the extra</button>
        </div>
    )
      
    )}

  </Grid>
  )
}

export default QuoteAddons;
