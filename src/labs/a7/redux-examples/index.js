import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
/*import {createStore} from "redux";*/
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import Todos from "./todos-component";

/*const store = createStore(hello);*/
const store = configureStore({
    reducer: {hello, todos}
}); // data stored here

const ReduxExamples = () => {
    return (
        <Provider store={store}> {/*provide path*/}
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>{/*select the data*/}
            </div>
        </Provider>
    );
};

export default ReduxExamples;