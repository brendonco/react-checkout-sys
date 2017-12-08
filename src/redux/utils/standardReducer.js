export default (state, { payload = {} }) =>
  typeof payload === 'object' && Object.keys(payload).length
    ? {
        ...state,
        ...payload
      }
    : state;
