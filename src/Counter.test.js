import React from "react";
import { screen, render } from "@testing-library/react";
import { createStore } from "redux";
import reducer from "./reducer";
import store from "./store";
import Counter from "./Counter";
import {Provider} from 'react-redux'



const Wrapper = ({children}) => (
    <Provider store={store}>{children}</Provider>
)

describe("<Counter />", ()=>{
    it("Counter snap shot", ()=>{
        const utils = render(<Counter />, {wrapper:Wrapper});
        expect(utils.container).toMatchSnapshot();
    });
})