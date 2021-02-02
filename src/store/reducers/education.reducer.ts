export interface educationReducerState {
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
enum educationActionTypes {
  SET_QUALIFICATION = 'SET_QUALIFICATION'
}
export const educationReducer = (state: educationReducerState = initialState, action: { type: any; payload?: any }) => {
  switch (action.type) {
    case educationActionTypes.SET_QUALIFICATION:
      return {
        ...state,
        qualification: action.payload
      }
    default:
      return state;
  }
}