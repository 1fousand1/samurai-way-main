import { AnyAction, applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { ActionTypes } from "./actions/actionCreatorTypes";
import appReducer from "./reducers/app-reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import chatReducer from "./reducers/chat-reducer";
import { dialogsReducer } from "./reducers/dialogs-reducer";
import { usersReducer } from "./reducers/users-reducer";
import { profileReducer } from "./reducers/profile-reducer";

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionTypes>;

const rootReducer = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    chat: chatReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
