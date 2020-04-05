import {
    CHAMPIONS_LIST,
    CHAMPION_DETAIL
} from './actions'


const initialState = {
    list: {},
    detail: {}
}

const ChampionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHAMPIONS_LIST:
            return list(state, action.payload)
        case CHAMPION_DETAIL:
            return detail(state, action.payload)
    
        default:
            return state
    }
}

function list(state, payload) {
    state = Object.assign({}, state, payload)
    return {
        ...state,
        list: payload
    }
}

function detail (state, payload) {
    state = Object.assign({}, state, payload)
    return {
        ...state,
        detail: payload
    }
}
export default ChampionsReducer