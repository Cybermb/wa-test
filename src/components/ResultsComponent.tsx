/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import searchSpecific from '../functions/searchSpecific'
import Styles from '../Styles' 
import loading from '../loading.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import sortResults from '../functions/sortResults'

const mapStateToProps = (state:any) => ({
    sort: state.sort,
    results: state.results,
    loading: state.loading,
    showModal: state.showModal,
    specificInfo: state.specificInfo,
})

const SearchComponent = (props:any) => {
    const searchResults = props.results
    if (searchResults?.length > 0) return (
        <React.Fragment>
            <h2 css={Styles.title}>
                Results:
            </h2>
            <table css={Styles.resultTable} >
                <thead>
                    <TableHeader sort={props.sort} results={searchResults}/>
                </thead>
                <tbody>
                    {searchResults.map((result:any, index:number) => <Results key={index} result={result} {...props}/>)}
                </tbody>
                
            </table>
        </React.Fragment>
    )
    if (props.loading) return <img css={Styles.loading} src={loading} alt={"Loading indicator"} />
    return null
}

export default connect(mapStateToProps)(SearchComponent)

const loadModal = async (specificInfo:any, dispatch:Function, imdbID:string) => {
    dispatch({
        type: "toggleModal", 
        payload: imdbID,
    })
    if (specificInfo[imdbID]) return
    dispatch({type: "toggleLoading"})
    const specificResult = await searchSpecific(imdbID)
    const newSpecificInfoList = {...specificInfo}
    newSpecificInfoList[imdbID] = specificResult
    dispatch({
        type: "updateState",
        payload: {specificInfo: newSpecificInfoList}
    })
    dispatch({type: "toggleLoading"})
}

const TableHeader = (props:any) => {
    const sort = props.sort
    const sortBy = sort[0]
    const sortDir = sort[1]
    const dispatch = useDispatch()
    const updateSort = (sortType:string) => {
        if (sortBy === sortType) {
            dispatch({
                type: "updateState",
                payload: {
                    sort: [sortBy, (sortDir === "des" ? "asc" : "des")],
                    results: sortResults(props.results, [sortBy, (sortDir === "des" ? "asc" : "des")])
                }
            })
        } else {
            dispatch({
                type: "updateState",
                payload: {
                    sort: [sortType, "des"],
                    results: sortResults(props.results, [sortType, "des"])
                }
            })
        }
    }

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
    const imdbID = result.imdbID
    const specificInfo = useSelector((state:any) => state.specificInfo)
    const dispatch = useDispatch()
    
    return <tr css={Styles.tableRow} onClick={async () => loadModal(specificInfo, dispatch, imdbID)}>
        <td css={Styles.tablePoster}>
            {result.Poster !== "N/A" ? <img src={result.Poster} alt="poster"/> : "N/A"}
        </td>
        <td>{result.Title}</td>
        <td>{result.Year}</td>
        <td>{result.Type}</td>
    </tr>
}