import {mapSampleDataToStore} from './actions'

/**
 * This function will dispatch the data to TableData in redux Store.
 * @param {Object} data this is the data that will be sent to the redux store
 * @returns data to redux store
 */
export function sendGlobalDataToStore(data) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(mapSampleDataToStore(data));
    }, 1);
  }
}