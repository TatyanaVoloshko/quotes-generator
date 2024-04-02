import React, { Component } from 'react'
import './Quote.css'
import LoadingBar from '../loadingBar/LoadingBar';
import ErrorWrapper from '../../pages/ErrorWrapper';
import { getQuotes } from '../../api/quotableApi';

export default class Quote extends Component {
  state = {
    quotes: [],
    currentQuoteIndex: 0,
    isLoading: true,
    isError: false,
  };

  async componentDidMount() {
    await this.fetchRandomQuote();
  }

  fetchRandomQuote = async () => {
    try {
      const quotes = await getQuotes()
      this.setState({quotes})
    } catch (error) {
      this.setState({isError: true})
      console.error(error);
    } finally {
      this.setState({isLoading: false})
    }
    };
    
  render() {
    const { quotes, currentQuoteIndex, isLoading, isError } = this.state;
    const currentQuote = quotes[currentQuoteIndex];

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
            <button onClick={this.fetchRandomQuote} className="Btn">
              New Quote
            </button>
          </div>
        </div>
      </ErrorWrapper>
    )
   
  }
}
