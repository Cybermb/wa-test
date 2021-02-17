import React from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import Font from './Font'
import Styles from './Styles'
import Divider from './components/Divider'
import APIField from './components/APIkey'
import SearchComponent from './components/SearchComponent'
import ResultsComponent from './components/ResultsComponent';
import InfoModal from './components/InfoModal';

function App() {
    return (
        <React.Fragment>
            <InfoModal/>
            <div css={Styles.background}>
                <Font/>
                <div css={Styles.wrapper}>
                    <h1 css={Styles.title}>
                        OMDB search app
                    </h1>
                    <Divider/>
                    <APIField/> {/* Posting own API key in source for public is VERY BAD idea, therefore, we enter it manualy and save in client browser */}
                    <Divider/>
                    <SearchComponent/>
                    <ResultsComponent/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
