import { useState, useEffect } from "react";

const useFetch = (url) => {
  const controller = new AbortController();
  const signal = controller.signal;

  setTimeout(() => controller.abort(), 3000);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, { signal })
      .then(res => {
        if (res.ok) {
          return res.text();
        } else {
          throw new Error()
        }
      })
      .then(data => {
        setData(JSON.parse(data));
        setIsSuccess(true);
        setIsLoading(false);
      })
      .catch(err => {
        setIsError(true);
        setIsLoading(false);
      })
  }, [url]); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, isLoading, isError, isSuccess };
};

export default useFetch;
