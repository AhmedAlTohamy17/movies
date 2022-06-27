import {createStore} from 'redux'
import reducers from "./reducers/combinereducers";
const store = createStore(reducers)

export default store