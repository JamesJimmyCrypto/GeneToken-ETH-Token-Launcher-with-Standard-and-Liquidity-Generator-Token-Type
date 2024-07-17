import { SELECT_TOKEN } from '../actions/tokenActions';
import { getBaseTokenLogoURLByTokenSymbol } from "@/constant/Token";

const initialState = {
  inToken: getBaseTokenLogoURLByTokenSymbol[0],
  outToken: getBaseTokenLogoURLByTokenSymbol[3],
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TOKEN:
      return {
        ...state,
        [action.payload.tokenType]: action.payload.token,
      };
    default:
      return state;
  }
};

export default tokenReducer;
