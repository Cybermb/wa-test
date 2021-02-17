/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import search from '../functions/search'
import Styles from '../Styles' 
import Button from './Button'
import Input from './Input'


// export default function SearchComponent(props:any) {
const mapStateToProps = (state:any) => ({
    loading: state.loading
})
export default connect(mapStateToProps)((props:any) => {
    // const setSort = props.setSort
    // const setSearchResults = props.setSearchResults
    const loading = props.loading
    // const toggleLoading = props.toggleLoading
    const [searchValue, setSearchValue] = React.useState("")
    const [searchType, setSearchType] = React.useState("")
    const dispatch = useDispatch()
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
                {/* loading should not be string here lul (!loading instead of true)*/}
                <Button text={loading ? "Searching..." : "Search"} type="submit" disabled={!searchValue || loading} onClick={async (e:any) => {
                    e.preventDefault()
                    // setSort(["", "des"])
                    // toggleLoading((prev:boolean) => !prev)
                    // setSearchResults(await search(searchValue, searchType))
                    // toggleLoading((prev:boolean) => !prev)

                    
                    // dispatch({
                    //     type: "updateState",
                    //     payload: {loading: !loading}
                    // })
                    // const searchResults = await search(searchValue, searchType)
                    // dispatch({
                    //     type: "updateResults",
                    //     payload: searchResults
                    // })
                    // dispatch({
                    //     type: "updateState",
                    //     payload: {loading: !loading}
                    // })
                    

                    dispatch({type: "toggleLoading"})
                    const searchResults = await search(searchValue, searchType)
                    dispatch({
                        type: "updateResults",
                        payload: searchResults
                    })
                    dispatch({type: "toggleLoading"})
                }}/>
            </div>
        </form>
    )
})

// export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)