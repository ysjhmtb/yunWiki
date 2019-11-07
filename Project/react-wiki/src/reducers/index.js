import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import signReducer from './sign'


const rootReducer = (history) => combineReducers({
    count: counterReducer,
    sign: signReducer,
    
    router: connectRouter(history)
})

export default rootReducer