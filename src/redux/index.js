import { createStore } from "redux"

const initialState = {
    family: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_MEMBER":
            return {
                ...state,
                family: [...state.family, action.payload]
            }
        case "UPDATE_MEMBER":
            const arrCopy = [...state.family]
            arrCopy.splice(action.index, 1, action.payload)
            return {
                ...state,
                family: arrCopy
            }
        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

export default store