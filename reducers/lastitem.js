import { SET_LAST_ITEM } from '../types/lastitem';
const initState = {
	lastItem: 0
}
export default (state = initState, action) => {
	switch(action.type) {
	 	case SET_LAST_ITEM :
	 		return {...state, lastItem: action.payload.lastItem}
	 	default :
	 		return state
 	}
}