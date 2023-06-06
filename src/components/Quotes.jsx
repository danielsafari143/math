import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await fetch('https://api.api-ninjas.com/v1/quotes?category=dreams',
        {
          method: 'GET',
          headers: { 'X-Api-Key': 'beSNGjWMHbtj5yQK66y8qw==IhBueBkGLQYQ1tJj' },
          contentType: 'application/json',
        }).then((res) => res.json())
        .then((val) => {
          setQuotes(val[0].quote);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    };
    getData();
  }, [setQuotes]);

  if (loading === true) {
    return <div className="calculate"><p className="quote">Loading...</p></div>;
  }

  if (error !== true) {
    return <div className="calculate"><p className="quote">{quotes}</p></div>;
  }
  return <div className="calculate"><p className="quote error">An error occurred while processing your request</p></div>;
};

export default Quotes;
