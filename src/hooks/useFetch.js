import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_QUOTE_API_URL)
    .then(res => {
      if (res.ok) {
        return res.text();
      } else {
        throw new Error()
      }      
    })
    .then(data => {
      setData(JSON.parse(data)[0]);
      setIsSuccess(true);
      setIsLoading(false);
    })
    .catch(err => {
      setIsError(true);
      setIsLoading(false);
    })
  }, [url]);

  return {data, isLoading, isError, isSuccess};
};

export default useFetch;
