import { educationState } from './reducers/education.reducer';
import { nameState } from './reducers/name.reducer';

export interface rootState {
  nameState: nameState;
  educationState: educationState;
}