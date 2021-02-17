const appState = {
    results: [],
    showModal: false,
    loading: false,
    sort: ["", "des"],
    specificInfo: {},
    modalInfoID: "test",
}

const rootReducer = (state:any = appState, action:any) => {
    if (action.type === "updateResults") return Object.assign({}, state, {
        results: action.payload
    })
    if (action.type === "toggleLoading") return Object.assign({}, state, {loading: !state.loading})
    if (action.type === "toggleModal") return Object.assign({}, state, {
        showModal: !state.showModal,
        modalInfoID: action.payload,
    })
    if (action.type === "updateState") return Object.assign({}, state, action.payload)
    return state
}

export default rootReducer