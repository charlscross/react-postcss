import { createStore, combineReducers, applyMiddleware } from 'redux'
import messageReducer from './reducers/message'
import tabledataReducer from './reducers/tabledata'
import lastItemReducer from './reducers/lastitem'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
 messageReducer,
 tabledataReducer,
 lastItemReducer
})
const serializedStateTabledata = window.localStorage.state && window.localStorage.state != 'undefined' ? JSON.parse(window.localStorage.state) : {}
const store = createStore(
	reducer,
 	{tabledataReducer: serializedStateTabledata.tabledataReducer},
 	composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
	window.localStorage.state = JSON.stringify({tabledataReducer: store.getState().tabledataReducer})
})
export default store;