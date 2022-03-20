import { createStore } from "redux";
// import RotateReducer from "../reducers/RotateReducer";
import rootReducer from '../reducers';

// function ConfigureStore(state = {rotating: true}) {
//     return createStore(rootReducer, state);
// }

const configureStore = createStore(rootReducer) ;



export default configureStore;