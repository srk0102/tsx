/**
 * This will return the object that needs to be in format of dispatch object.
 * @param {Object} data this is data will be sent as payload for type global.
 * @returns the object with type and payload in it for global action.
 */
export const mapSampleDataToStore = (data) => {
  return {
    type: "global",
    payload: data
  }
}