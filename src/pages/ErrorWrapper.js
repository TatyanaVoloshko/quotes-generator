import React, { Component } from 'react'
import "./ErrorWrapper.css"

export default class ErrorWrapper extends Component {
    render() {
        const { isError, children } = this.props
        
        if (isError) {
        return <div className='Error'>Oooops! Something went wrong!</div>;
        }

        return <>{ children }</>

    
  }
}
