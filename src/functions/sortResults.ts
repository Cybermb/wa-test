const sortResults = (searchResults:Array<any>, type:Array<string>) => {
    const sortedResults = [...searchResults]
    if (type[1] === "des") {
        sortedResults.sort(function(a, b){
            if(a[type[0]] > b[type[0]]) { return -1; }
            if(a[type[0]] < b[type[0]]) { return 1; }
            return 0;
        })
    } else {
        sortedResults.sort(function(a, b){
            if(a[type[0]] < b[type[0]]) { return -1; }
            if(a[type[0]] > b[type[0]]) { return 1; }
            return 0;
        })
    }
    return sortedResults
    // setSearchResults(newResults)
}

export default sortResults