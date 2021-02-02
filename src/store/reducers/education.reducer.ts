import { educationActionTypes } from "../actionTypes/educationActionTypes";

// type educationDetailObj = {
//     qualificaton: string;
//     university: string;
//     startDate: string;
//     endDate: string;
//     learnings: string[];
//   }
// export interface educationState {
//   bookmark: [{ name: string; detail: educationDetailObj}]
// }
export interface educationState {
  qualificaton: string;
  university: string;
  startDate: string;
  endDate: string;
  learnings: string[];
}

const initialState = {
  qualificaton: '',
  university: '',
  startDate: '',
  endDate: '',
  learnings: []
}

export const educationReducer = (state: educationState = initialState, action: { type: any; payload?: any }) => {
  switch (action.type) {
    case educationActionTypes.SET_QUALIFICATION:
      return {
        ...state,
        qualification: action.payload
      }
    case educationActionTypes.SET_UNIVERSITY:
      return {
        ...state,
        university: action.payload
      }
    case educationActionTypes.SET_STARTDATE:
      return {
        ...state,
        startDate: action.payload
      }
    case educationActionTypes.SET_ENDDATE:
      return {
        ...state,
        endDate: action.payload
      }
    case educationActionTypes.SET_LEARNINGS:
      return {
        ...state,
        qualification: [...action.payload]
      }
    default:
      return state;
  }
}