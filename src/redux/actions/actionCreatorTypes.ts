import { ProfileActionType} from "./profileAction";
import {AppActionType} from "./appAction";
import {AuthActionType} from "./authAction";
import {DialogsActionType} from "./dialogsActions";
import {UsersActionType} from "./usersAction";

export type ActionsType = AppActionType
    | ProfileActionType
    | DialogsActionType
    | UsersActionType
    | AuthActionType


