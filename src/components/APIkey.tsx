<<<<<<< HEAD
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import Styles from '../Styles' 
import Input from './Input'

export default function APIkey() {
    const [APIkey, setAPIkey] = React.useState(localStorage.getItem("APIkey") || "") 

    return (
        <div css={Styles.text}>
            <p>
                In order to use the search service you must own and enter your OMDB API key. If you dont have one, 
                you can <a css={Styles.link} target="_blank" rel="noreferrer" href="https://www.omdbapi.com/apikey.aspx">
                    get a free OMDB api key here
                </a>
            </p>
            <div css={Styles.flexRow}>
                <h3 css={Styles.text} >
                    Your API key:
                </h3>
                <Input value={APIkey} placeholder="Enter your API key..." onChange={(e:any) => {
                    const value = e.target.value
                    setAPIkey(value)
                    localStorage.setItem("APIkey", value)
                }} />
            </div>
            
            
            <br/>
            
        </div>
        
    )
}
=======
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import Styles from '../Styles' 
import Input from './Input'

export default function APIkey() {
    const [APIkey, setAPIkey] = React.useState(localStorage.getItem("APIkey") || "") 

    return (
        <div css={Styles.text}>
            <p>
                In order to use the search service you must own and enter your OMDB API key. If you dont have one, 
                you can <a css={Styles.link} target="_blank" rel="noreferrer" href="https://www.omdbapi.com/apikey.aspx">
                    get a free OMDB api key here
                </a>
            </p>
            <div css={Styles.flexRow}>
                <h3 css={Styles.text} >
                    Your API key:
                </h3>
                <Input value={APIkey} placeholder="Enter your API key..." onChange={(e:any) => {
                    const value = e.target.value
                    setAPIkey(value)
                    localStorage.setItem("APIkey", value)
                }} />
            </div>
            
            
            <br/>
            
        </div>
        
    )
}
>>>>>>> eea5b45c90cab6652fed72848d7f67e8f5077ff3
