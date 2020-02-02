const ACTION_TYPES = {
  AXIOS_FETCH: "AXIOS_FETCH",
  AXIOS_FETCH_SUCCESS: "AXIOS_FETCH_SUCCESS",
  AXIOS_FETCH_FAILURE: "AXIOS_FETCH_FAILURE",
  UPDATE_TRANSFORM_Z_VALUE: "UPDATE_TRANSFORM_Z_VALUE"
};

const ACTION_CREATORS = {
  fetchAxios: (payload) => {
    return {
      type: ACTION_TYPES.AXIOS_FETCH,
      payload
    }
  },
  fetchAxiosSuccess: (payload) => {
    return {
      type: ACTION_TYPES.AXIOS_FETCH_SUCCESS,
      payload
    }
  },
  fetchAxiosFailure: (payload) => {
    return {
      type: ACTION_TYPES.AXIOS_FETCH_FAILURE,
      payload
    }
  },
  updateTransformZValue: (payload) => {
    return {
      type: ACTION_TYPES.UPDATE_TRANSFORM_Z_VALUE,
      payload
    }
  }
};

export default { ...ACTION_TYPES, ...ACTION_CREATORS };