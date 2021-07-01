import { combineReducers, createStore } from "redux";
import post from './reducers/postReducer'
const reducer =combineReducers({post})


const store=createStore(reducer)
window.store = store

export default store