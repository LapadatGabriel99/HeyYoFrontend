import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import thunkMiddleware  from 'redux-thunk'
import logger from 'redux-logger'

const middleware = [thunkMiddleware, logger];

const store = createStore(rootReducer, 
                          composeWithDevTools(applyMiddleware(...middleware)))

export default store