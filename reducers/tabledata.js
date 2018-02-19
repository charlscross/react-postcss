import { SET_TABLEDATA } from '../types/tabledata';
const initState = {
	tabledata: []
}
export default (state = initState, action) => {
	switch(action.type) {
	 	case SET_TABLEDATA :
	 	console.log(state)
	 		return {...state, tabledata: state.tabledata.concat(action.payload.tabledata)}
	 	default :
	 		return state
 	}
}