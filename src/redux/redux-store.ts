import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import { reducer as formReducer} from 'redux-form';
import {ActionsType} from "./actions/actionCreatorTypes";
import appReducer from "./reducers/app-reducer";
import {composeWithDevTools} from "@redux-devtools/extension";


export type ReduxStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<ReduxStateType, any, AnyAction>

export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxStateType,
    unknown,
    ActionsType
>

const rootReducer = combineReducers({
     app: appReducer,
     profilePage: profileReducer,
     dialogsPage: dialogsReducer,
     usersPage: usersReducer,
     auth: authReducer,
     form: formReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))


