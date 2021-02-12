<<<<<<< HEAD
export default async function searchSpecific(id:string) {
    const APIkey = localStorage.getItem("APIkey") || ""
    console.log("Searching for", id)
    const response = await (await fetch(`https://www.omdbapi.com/?apikey=${APIkey}&i=${id}&plot=full`)).json()
    if (response.Error) {window.alert(response.Error); return}
    // return window.alert(response.Plot)
    return response
=======
export default async function searchSpecific(id:string) {
    const APIkey = localStorage.getItem("APIkey") || ""
    console.log("Searching for", id)
    const response = await (await fetch(`https://www.omdbapi.com/?apikey=${APIkey}&i=${id}&plot=full`)).json()
    if (response.Error) {window.alert(response.Error); return}
    // return window.alert(response.Plot)
    return response
>>>>>>> eea5b45c90cab6652fed72848d7f67e8f5077ff3
}