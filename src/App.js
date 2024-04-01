import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
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
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            backgroundColor: "#333333",
            color: "white",
            padding: 50,
            textAlign: "center",
          }}
        >
          Quote Generator
        </h1>
        {currentQuote && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              paddingTop: 20,
              paddingLeft: 100,
              paddingRight: 100,
              paddingBottom: 5,
            }}
          >
            <p
              style={{
                marginBottom: 10,
                fontSize: 24,
              }}
            >
              {currentQuote.content}
            </p>
            <div
              style={{
                fontWeight: 700,
                textAlign: "left",
                marginBottom: 30,
                
              }}
            >
              {currentQuote.author}
            </div>
          </div>
        )}
        <button onClick={this.fetchRandomQuote} style={{color: "white", fontSize: 24, backgroundColor: "orange", padding: 5}}>New Quote</button>
      </div>
    );
  }
}
