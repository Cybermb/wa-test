import React from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import './App.css'
import Font from './Font'
import Styles from './Styles'
import Divider from './components/Divider'
import APIField from './components/APIkey'
import SearchComponent from './components/SearchComponent'
import ResultsComponent from './components/ResultsComponent';
import InfoModal from './components/InfoModal';


function App() {
    
    const [searchResults, setSearchResults] = React.useState<any>([])
    const [sort, setSort] = React.useState(["", "des"])
    const [showModal, toggleModal] = React.useState(false)
    const [loading, toggleLoading] = React.useState(false)
    const [specificInfo, setSpecificInfo] = React.useState<any>({})

    const updateSort = (newSortString:string) => {
        const sortBy = sort[0]
        const sortDir = sort[1]
        if (sortBy === newSortString) {
            setSort([sortBy, (sortDir === "des" ? "asc" : "des")])
            sortResults([sortBy, (sortDir === "des" ? "asc" : "des")])
        } else {
            setSort([newSortString, "des"])
            sortResults([newSortString, "des"])
        }
        
    }

    const sortResults = (type:any) => {
        const newResults = [...searchResults]
        if (type[1] === "des") {
            newResults.sort(function(a, b){
                if(a[type[0]] > b[type[0]]) { return -1; }
                if(a[type[0]] < b[type[0]]) { return 1; }
                return 0;
            })
        } else {
            newResults.sort(function(a, b){
                if(a[type[0]] < b[type[0]]) { return -1; }
                if(a[type[0]] > b[type[0]]) { return 1; }
                return 0;
            })
        }
        setSearchResults(newResults)
    }
    
    return (
        <React.Fragment>
            <InfoModal showModal={showModal} toggleModal={toggleModal} specificInfo={specificInfo} loading={loading} />
            <div css={Styles.background}>
                <Font/>
                <div css={Styles.wrapper}>
                    <h1 css={Styles.title}>
                        OMDB search app
                    </h1>
                    <Divider/>
                    <APIField/> {/* Posting own API key in source for public is VERY BAD idea, therefore, we enter it manualy and save in client browser */}
                    <Divider/>
                    <SearchComponent setSort={setSort} setSearchResults={setSearchResults} loading={loading} toggleLoading={toggleLoading} />
                    <ResultsComponent 
                        searchResults={searchResults} 
                        sort={sort} 
                        updateSort={updateSort} 
                        toggleModal={toggleModal} 
                        loading={loading} 
                        toggleLoading={toggleLoading} 
                        setSpecificInfo={setSpecificInfo} 
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
