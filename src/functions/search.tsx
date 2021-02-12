export default async function search(value:string, searchType:string) {
    const APIkey = localStorage.getItem("APIkey") || ""
    let results: Array<any> = []
    const response = await (await fetch(`https://www.omdbapi.com/?apikey=${APIkey}&s=${value}&type=${searchType}&page=${1}`)).json()
    if (response.Error) {window.alert(response.Error); return}
    results = (response.Search)
    const totalPages = Math.ceil(Number(response.totalResults)/10)
    const maxPageQuery = 3

    if (totalPages < 2) return results
    for (let i = 2; i <= (totalPages > maxPageQuery ? maxPageQuery : totalPages); i++) {
        const pageResult:any = await (await fetch(`https://www.omdbapi.com/?apikey=${APIkey}&s=${value}&type=${searchType}&page=${i}`)).json()
        // results.push(pageResult.Search)
        pageResult.Search.forEach((res: any) => {
            results.push(res)
        });
    }
    return results
}