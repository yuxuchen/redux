import {createStore, applyMiddleware,compose} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas.js';

const sagaMiddleware=createSagaMiddleware();
const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer= composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(
  reducer,enhancer
)
sagaMiddleware.run(todoSagas);
export default store;
// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(
//         applyMiddleware(thunk)
//         // other store enhancers if any
//       );
// const store =createStore(
//     reducer,enhancer
//     )
// export default store;
