import { bookmarksActionTypes } from "../actionTypes/bookmarksActionTypes";

type educationDetailObj = {
  qualification: string;
  university: string;
  startDate: string;
  endDate: string;
  learnings: string[];
}

export interface bookmarksState {
  bookmarks: [{ bookmarkName: string; detail: educationDetailObj }]
}

const initialState: bookmarksState = {
  bookmarks: [{
    bookmarkName: '', detail: {
      qualification: '',
      university: '',
      startDate: '',
      endDate: '',
      learnings: [],
    }
  }]
}

export const bookmarksReducer = (state: bookmarksState = initialState, action: { type: any; payload?: any }) => {
  switch (action.type) {
    case bookmarksActionTypes.SET_BOOKMARK:
      return {
        ...state,
        bookmarks: [...action.payload]
      }
    default:
      return state;
  }
}