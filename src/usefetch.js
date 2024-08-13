import { useState, useEffect } from 'react';

const UseFetch = (url) => {
  {/*use fetch is used for code reuseablitiy*/}
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true); {/* state vairiable that tracks loading status of fetch request of blog */}
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
     {/*used to cancel data fetch request in any case ,activated when cleanup function is called*/}

    fetch(url, { signal: abortCont.signal }) // when AbortController() is activated signal termaintes the fetch request*
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json(); {/* converts json to javascript when blogs are displayed */}
      })
      .then(data => {
        console.log('Fetched data:', data);
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError')
        {
          console.log('fetch aborted');
          setIsPending(false);
          {/* error is not set to aborterror because it's only used to cancel the data fetching ,not unexpected error */}
        } 
        else 
        {
          setIsPending(false);
          setError(err.message);
        }
      }, 1000);
      
    return () => abortCont.abort(); {/*cleanup function-called when compound unmounts and fetching is to be cancelled*/}
  }, [url]); 

  return { data, isPending, error };
}

export default UseFetch;
