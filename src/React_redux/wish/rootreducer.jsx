import{reducer} from './reducer'
import {combineReducers} from 'redux';

let Rootreducer=combineReducers({message:reducer});
export{Rootreducer}