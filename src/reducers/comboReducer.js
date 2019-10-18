import React from 'react';
import {combineReducers} from 'redux';
import getnewleadReducer from './getnewleadReducer';
import showfilterReducer from './showfilterReducer';

const comboReducer = combineReducers({
  leads: getnewleadReducer,
  selectedGender: showfilterReducer
})

export default comboReducer;
