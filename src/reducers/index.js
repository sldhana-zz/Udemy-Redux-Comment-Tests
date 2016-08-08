import { combineReducers } from 'redux';
import Comments from './comments';

const rootReducer = combineReducers({
  comments: Comments
});

export default rootReducer;
