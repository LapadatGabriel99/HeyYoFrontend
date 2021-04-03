import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import thunkMiddleware  from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

const middleware = [thunkMiddleware, logger];

export const store = createStore(rootReducer, 
                          composeWithDevTools(applyMiddleware(...middleware)))

export const persistor = persistStore(store)

export default { store, persistor }