export const SELECT_TOKEN = 'SELECT_TOKEN';

export const selectToken = (tokenType, token) => ({
  type: SELECT_TOKEN,
  payload: { tokenType, token },
});
