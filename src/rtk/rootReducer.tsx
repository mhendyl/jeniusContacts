import {combineReducers} from '@reduxjs/toolkit';
import {contactReducer} from './contact';

const rootReducer = combineReducers({
  contactReducer: contactReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
