import { createStore } from "redux";
import RotateReducer from "../reducers/RotateReducer";

function ConfigureStore(state = {rotating: true}) {
    return createStore(RotateReducer, state);
}

export default ConfigureStore;