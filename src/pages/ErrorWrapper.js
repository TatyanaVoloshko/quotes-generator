import React from 'react'
import "./ErrorWrapper.css"

export default function ErrorWrapper({ isError, children }) {

      if (isError) {
        return <div className='Error'>Oooops! Something went wrong!</div>;
        }

        return <>{ children }</>
}


