import { createStore, applyMiddleware} from 'redux'
//composeWithDevTools lo voy a usar cuando quiero debuggear y ver que hay en el estado global
import {composeWithDevTools} from 'redux-devtools-extension'
//Thunk lo voy a utilizar cuando tenga que hacer llamadas asincrona a alguna API
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store