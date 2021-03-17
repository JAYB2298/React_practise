import {Rootreducer} from './rootreducer'
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

let Store=createStore(Rootreducer,composeWithDevTools());

export{Store};