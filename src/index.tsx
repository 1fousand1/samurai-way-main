import React from 'react';
import './index.css';
import store from './redux/store';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {RootStateType} from "./redux/store";


const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());
store.subscribe(() => rerenderEntireTree(store.getState()));