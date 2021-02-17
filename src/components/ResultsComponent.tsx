/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import searchSpecific from '../functions/searchSpecific'
import Styles from '../Styles' 
import loading from '../loading.png'
import { connect, useDispatch } from 'react-redux'
import sortResults from '../functions/sortResults'



// export default function SearchComponent(props:any) {

const SearchComponent = (props:any) => {
    // const searchResults = results
    
    const searchResults = props.results
    console.log(props)
    if (searchResults?.length > 0) return (
        <React.Fragment>
            <h2 css={Styles.title}>
                Results:
            </h2>
            <table css={Styles.resultTable} >
                <TableHeader sort={props.sort} results={searchResults}/>
                {/* <TableHeader {...props} /> */}
                {searchResults.map((result:any, index:number) => <Results key={index} result={result} {...props}/>)}
            </table>
        </React.Fragment>
    )
    if (props.loading) return <img css={Styles.loading} src={loading} alt={"Loading indicator"} />
    return null
}

const mapStateToProps = (state:any) => ({
    sort: state.sort,
    results: state.results,
    loading: state.loading,
    showModal: state.showModal,
})

export default connect(mapStateToProps)(SearchComponent)

const TableHeader = (props:any) => {
    const sort = props.sort
    const sortBy = sort[0]
    const sortDir = sort[1]
    const dispatch = useDispatch()
    const updateSort = (sortType:string) => {
        if (sortBy === sortType) {
            // setSort([sortBy, (sortDir === "des" ? "asc" : "des")])
            // sortResults([sortBy, (sortDir === "des" ? "asc" : "des")])
            dispatch({
                type: "updateState",
                payload: {
                    sort: [sortBy, (sortDir === "des" ? "asc" : "des")],
                    results: sortResults(props.results, [sortBy, (sortDir === "des" ? "asc" : "des")])
                }
            })
        } else {
            // setSort([sortType, "des"])
            // sortResults([sortType, "des"])
            
            dispatch({
                type: "updateState",
                payload: {
                    sort: [sortType, "des"],
                    results: sortResults(props.results, [sortType, "des"])
                }
            })
        }
    }

    // const dispatch = useDispatch(function)
    return (
        <tr css={[Styles.title, Styles.tableHeader]}>
            <th>Poster</th>
            <th onClick={() => updateSort("Title")}>
                Title {sortBy === "Title" ? (sortDir === "des" ? "▼" : "▲" ) : " "}
            </th>
            <th onClick={() => updateSort("Year")}>
                Year {sortBy === "Year" ? (sortDir === "des" ? "▼" : "▲" ) : " "}
            </th>
            <th onClick={() => updateSort("Type")}>
                Type {sortBy === "Type" ? (sortDir === "des" ? "▼" : "▲" ) : " "}
            </th>
        </tr>
    )
}

const Results = (props:any) => {
    const result = props.result
    // const toggleLoading = props.toggleLoading
    // const toggleModal = props.toggleModal
    // const setSpecificInfo = props.setSpecificInfo

    const dispatch = useDispatch()
    return <tr css={Styles.tableRow} onClick={async () => {
        console.log(!props.loading)
        dispatch({type: "toggleModal"})
        dispatch({type: "toggleLoading"})
        // dispatch({
        //     type: "updateState",
        //     paylaod: {
        //         specificInfo: {},
        //     }
        // })
        const specificResult = await searchSpecific(result.imdbID)
        console.log(specificResult)
        dispatch({type: "toggleLoading"})
        dispatch({
            type: "updateState",
            paylaod: {
                specificInfo: specificResult,
            }
        })
        // dispatch({
        //     type: "updateState",
        //     paylaod: {
        //         loading: !props.loading,
        //         specificInfo: specificResult,
        //     }
        // })
        // console.log(props)
        // toggleModal((prev:boolean) => !prev)
        // toggleLoading((prev:boolean) => !prev)
        // setSpecificInfo({})
        // const specificResult = await searchSpecific(result.imdbID)
        // setSpecificInfo(specificResult)
        // toggleLoading((prev:boolean) => !prev)
    }}>
        <td css={Styles.tablePoster}>
            {result.Poster !== "N/A" ? <img src={result.Poster} alt="poster"/> : "N/A"}
        </td>
        <td>{result.Title}</td>
        <td>{result.Year}</td>
        <td>{result.Type}</td>
    </tr>
}