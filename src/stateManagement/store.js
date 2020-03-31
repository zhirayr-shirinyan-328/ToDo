import createStore from "./createStore";
import rootReducer from "../reducers/rootReducer";

const store = createStore(rootReducer, { inDvelopent: true });

export default store;
