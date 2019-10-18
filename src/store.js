import {createStore} from 'redux';
import comboReducer from './reducers/comboReducer';

const configureStore = () => {
  const initialState = {}
  return createStore(comboReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  export default configureStore
