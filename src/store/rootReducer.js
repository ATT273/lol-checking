import ChampionsReducer from '../components/champions/store/reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    champions: ChampionsReducer
})
export default rootReducer