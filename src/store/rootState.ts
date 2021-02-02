import { bookmarksState } from './reducers/bookmarks.reducer';
import { nameState } from './reducers/name.reducer';

export interface rootState {
  nameState: nameState;
  bmksState: bookmarksState;
}