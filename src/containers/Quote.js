import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updatePrice } from '../store/userQuoteSlice';
import useFetch from '../hooks/useFetch';

import Loading from '../components/Loading';
import Error from '../components/Error';

import QuoteDetail from './QuoteDetail';
import QuoteAddons from './QuoteAddons';

import { CONSTANT } from '../constants';


function Quote(props) {
  const quote = props.quote;
  const dispatch = useDispatch();

  useEffect(() => {
    if (quote.monthlyPrice && quote.annualPrice) {
      dispatch(updatePrice({ 
        operation: CONSTANT.ACTION_OPERATION_SET, 
        monthlyPrice: quote.monthlyPrice, 
        annualPrice: quote.annualPrice 
      }))
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
      <QuoteDetail quote={quote} />
      {addonsContent}
    </>
  )
}

export default Quote;
