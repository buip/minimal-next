import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import settingsReducer from './slices/settings';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  keyPrefix: 'redux-',
  whitelist: ['settings']
};

const rootReducer = combineReducers({
  settings: settingsReducer
});

export { rootPersistConfig, rootReducer };
