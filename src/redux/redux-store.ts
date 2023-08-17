import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


export type ReducersType = typeof reducer
export type ReduxStateType = ReturnType<ReducersType>

const reducer = combineReducers({
     profileReducer,
     dialogsReducer,
     usersReducer,
     authReducer
});

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))


