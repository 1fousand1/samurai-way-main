import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';


export type ReducersType = typeof reducer
export type ReduxStateType = ReturnType<ReducersType>

const reducer = combineReducers({
     profileReducer,
     dialogsReducer,
     usersReducer,
     authReducer,
     form: formReducer
});

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))


