import {connect} from 'react-redux';
import {Aside} from '../Aside';
import {getUsers} from '../../../redux/selectors/usersSelector';
import {UserType} from "../../../types/usersTypes";
import {ReduxStateType} from "../../../redux/redux-store";


type MapStateToPropsType = {
    users: UserType[]
}

export type AsidePropsType = MapStateToPropsType

const mapStateToProps = (state : ReduxStateType): MapStateToPropsType => {
    return {
        users: getUsers(state)
    }
}

export const AsideContainer = connect(mapStateToProps)(Aside)