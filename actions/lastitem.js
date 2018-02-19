import { SET_LAST_ITEM } from '../types/lastitem';
export const setLastItem = (lastItem) => {
  return dispatch => {
    dispatch({
       type: SET_LAST_ITEM,
       payload: {
        lastItem
       }
    })
  }
}