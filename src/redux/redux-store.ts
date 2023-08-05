import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import {StoreType} from "./store";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


export type RootState = typeof reducers
export type ReduxStateType = ReturnType<RootState>


const reducers = combineReducers({
     profileReducer,
     dialogsReducer,
     usersReducer,
     authReducer
});

export const store: StoreType = createStore(reducers)


