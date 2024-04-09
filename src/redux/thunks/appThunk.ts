import {AppThunkDispatch, AppThunkType} from "../redux-store";
import {setAppInitializedAC} from "../actions/appAction";
import {getAuthUserData} from "./authThunk";


export const initializeTC = (): AppThunkType => async (dispatch: AppThunkDispatch
) => {
    try {
        await dispatch(getAuthUserData())
        dispatch(setAppInitializedAC())
    } catch (e) {
        console.error(e)
    }
}
