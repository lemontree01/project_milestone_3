import {
  applyMiddleware,
  combineReducers,
  createStore
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/user.reducer";
import { errorReducer } from "./reducers/error.reducer";
import { loadingReducer } from './reducers/loading.reducer';
import thunk from "redux-thunk"
import { adminReducer } from './reducers/admin.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  loading: loadingReducer,
  admin: adminReducer
})

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)