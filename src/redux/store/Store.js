import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/Reducer';
import {reducer as network} from 'react-native-offline';

const rootReducer = combineReducers({
  newsReducer: reducer,
  networkReducer: network,
});

export const newsStore = createStore(rootReducer, applyMiddleware(thunk));
