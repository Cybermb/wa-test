/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import searchSpecific from '../functions/searchSpecific'
import Styles from '../Styles' 
import loading from '../loading.png'

export default function SearchComponent(props:any) {
    const searchResults = props.searchResults
    if (searchResults?.length > 0) return (
        <React.Fragment>
            <h2 css={Styles.title}>
                Results:
            </h2>
            <table css={Styles.resultTable} >
                <TableHeader {...props} />
                {searchResults.map((result:any, index:number) => <Results key={index} result={result} {...props}/>)}
            </table>
        </React.Fragment>
    )
    if (props.loading) return <img css={Styles.loading} src={loading} alt={"Loading indicator"} />
    return null
}


const TableHeader = (props:any) => {
    const sort = props.sort
    const sortBy = sort[0]
    const sortDir = sort[1]
    return (
        <tr css={[Styles.title, Styles.tableHeader]}>
            <th>Poster</th>
            <th onClick={() => props.updateSort("Title")}>
                Title {sortBy === "Title" ? (sortDir === "des" ? "▼" : "▲" ) : " "}
            </th>
            <th onClick={() => props.updateSort("Year")}>
                Year {sortBy === "Year" ? (sortDir === "des" ? "▼" : "▲" ) : " "}
            </th>
            <th onClick={() => props.updateSort("Type")}>
                Type {sortBy === "Type" ? (sortDir === "des" ? "▼" : "▲" ) : " "}
            </th>
        </tr>
    )
}

const Results = (props:any) => {
    const result = props.result
    const toggleLoading = props.toggleLoading
    const toggleModal = props.toggleModal
    const setSpecificInfo = props.setSpecificInfo
    return <tr css={Styles.tableRow} onClick={async () => {
        toggleModal((prev:boolean) => !prev)
        toggleLoading((prev:boolean) => !prev)
        setSpecificInfo({})
        const specificResult = await searchSpecific(result.imdbID)
        setSpecificInfo(specificResult)
        toggleLoading((prev:boolean) => !prev)
    }}>
        <td css={Styles.tablePoster}>
            {result.Poster !== "N/A" ? <img src={result.Poster} alt="poster"/> : "N/A"}
        </td>
        <td>{result.Title}</td>
        <td>{result.Year}</td>
        <td>{result.Type}</td>
    </tr>
}