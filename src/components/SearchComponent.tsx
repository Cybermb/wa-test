/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import search from '../functions/search'
import Styles from '../Styles' 
import Button from './Button'
import Input from './Input'


export default function SearchComponent(props:any) {
    const setSort = props.setSort
    const setSearchResults = props.setSearchResults
    const loading = props.loading
    const toggleLoading = props.toggleLoading
    const [searchValue, setSearchValue] = React.useState("")
    const [searchType, setSearchType] = React.useState("")
    return (
        <form>
            <h2 css={Styles.title}>
                Find movies, series, and episodes!
            </h2>
            <div css={Styles.flexRow}>
                <Input value={searchValue} placeholder="Search by name..." onChange={(e:any) => {
                    const value = e.target.value
                    setSearchValue(value)
                    
                }} />
                <select css={[Styles.input, Styles.select]} value={searchType} onChange={(e) => {
                    setSearchType(e.target.value)
                }}>
                    <option value="">Any</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                </select>
                <Button text={loading ? "Searching..." : "Search"} type="submit" disabled={!(searchValue && !loading)} onClick={async (e:any) => {
                    e.preventDefault()
                    setSort(["", "des"])
                    toggleLoading((prev:boolean) => !prev)
                    setSearchResults(await search(searchValue, searchType))
                    toggleLoading((prev:boolean) => !prev)
                }}/>
            </div>
        </form>
    )
}