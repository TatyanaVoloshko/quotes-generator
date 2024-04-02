import React, { useEffect, useState } from 'react'
import './Quote.css'
import LoadingBar from '../loadingBar/LoadingBar';
import ErrorWrapper from '../../pages/ErrorWrapper';
import { getQuotes } from '../../api/quotableApi';

export default function Quote() {

  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
 
 const fetchRandomQuote = async () => {
   try {
     const loadedQuotes = await getQuotes();
     setQuotes(loadedQuotes);
     setIsLoading(false);
   } catch (error) {
     setIsError(true);
     setIsLoading(false);
     console.error(error);
   }
 };

  useEffect(() => {
   fetchRandomQuote()
  }, [])

  const currentQuote = quotes[currentQuoteIndex]
  if (isLoading) {
      return <LoadingBar />
    }

  return (
    <ErrorWrapper isError={isError}>
      <div className="Container">
        <h1 className="Title">Quote Generator</h1>
        {currentQuote && (
          <div className="Content">
            <p>&quot;{currentQuote.content}&quot;</p>
            <div className="Author">{currentQuote.author}</div>
          </div>
        )}
        <div className="BtnContainer">
          <button onClick={fetchRandomQuote} className="Btn">
            New Quote
          </button>
        </div>
      </div>
    </ErrorWrapper>
  ); }

 



 