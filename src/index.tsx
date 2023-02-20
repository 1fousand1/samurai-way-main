import React from 'react';
import './index.css';
import store, {RootStateType, StoreType} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

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