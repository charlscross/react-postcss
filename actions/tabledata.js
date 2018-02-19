import { SET_TABLEDATA } from '../types/tabledata';
export const setTabledata = (tabledata) => {
  return dispatch => {
    dispatch({
       type: SET_TABLEDATA,
       payload: {
        tabledata
       }
    })
  }
}