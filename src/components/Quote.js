import React, { Component } from 'react'
import axios from 'axios';
import './Quote.css'

export default class Quote extends Component {
  state = {
    quotes: [],
    currentQuoteIndex: 0,
  };

  async componentDidMount() {
    await this.fetchRandomQuote();
  }

  fetchRandomQuote = async () => {
    try {
      const { data } = await axios.get("https://api.quotable.io/quotes/random");
      this.setState({ quotes: data });
    } catch (error) {
      console.error(error);
    }
    };
    
  render() {
    const { quotes, currentQuoteIndex } = this.state;
    const currentQuote = quotes[currentQuoteIndex];

    return (
      <div className="Container">
        <h1 className="Title">Quote Generator</h1>
        {currentQuote && (
          <div className="Content">
            <p>&quot;{currentQuote.content}&quot;</p>
            <div className="Author">{currentQuote.author}</div>
          </div>
        )}
        <div className='BtnContainer'>
          <button onClick={this.fetchRandomQuote} className="Btn">
            New Quote
          </button>
        </div>
      </div>
    );
  }
}
