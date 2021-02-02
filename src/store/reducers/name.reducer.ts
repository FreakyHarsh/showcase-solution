import { nameActionTypes } from "../actionTypes/nameActionTypes";

export interface nameState {
  name: string;
}

const initialState: nameState = {
  name: ''
};

export const nameReducer = (state: nameState = initialState, action: { type: nameActionTypes; payload?: any }) => {
  switch (action.type) {
    case nameActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}