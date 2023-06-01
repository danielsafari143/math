import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState('Loading...');

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://api.api-ninjas.com/v1/quotes?category=dreams',
        {
          method: 'GET',
          headers: { 'X-Api-Key': 'beSNGjWMHbtj5yQK66y8qw==IhBueBkGLQYQ1tJj' },
          contentType: 'application/json',
        }).then((res) => res.json())
        .then((val) => val)
        .catch((e) => `Error : ${e}`);

      const val = await data;
      setQuotes(val);
    };
    getData();
  }, [setQuotes]);

  if (quotes === 'Loading...') {
    return <p>{quotes}</p>;
  }

  if (quotes[0] !== undefined) {
    return <p className="quote">{quotes[0].quote}</p>;
  }
  return <p className="quote">{quotes}</p>;
};

export default Quotes;
