import { ProfileActionType } from "./profileAction";
import { AppActionType } from "./appAction";
import { AuthActionType } from "./authAction";
import { DialogsActionType } from "./dialogsActions";
import { UsersActionType } from "./usersAction";
import { ChatActionType } from "./chatAction";

export type ActionTypes =
    | AppActionType
    | ProfileActionType
    | DialogsActionType
    | UsersActionType
    | AuthActionType
    | ChatActionType;
