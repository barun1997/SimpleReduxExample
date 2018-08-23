import {createStore} from 'redux'; 
import reducer from "../reducers";

const initialState = { username: "Barun",
totalAmount: 2500701}; 

export const store = createStore(reducer, initialState)