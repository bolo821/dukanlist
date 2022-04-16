import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { vendorReducer } from './reducers/vendorReducers'
import { leadReducer } from './reducers/leadReducers'

const reducer = combineReducers({
    vendorInfo: vendorReducer,
    leadInfo: leadReducer
})
const vendorInfoFromStorage = localStorage.getItem('vendorInfo')
  ? JSON.parse(localStorage.getItem('vendorInfo'))
  : null

console.log(vendorInfoFromStorage)
const initialState = {
    vendorInfo: { 
        loading: false,
        vendor: vendorInfoFromStorage,
        isAuthenticated: vendorInfoFromStorage ? true : false 
    },
    leadInfo: { 
        loading: false
    }
}
const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
