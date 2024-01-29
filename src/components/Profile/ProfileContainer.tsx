import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ReduxStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {getUserStatusTC, setUserProfileTC, updateUserStatusTC} from "../../redux/reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ThunkDispatch} from "redux-thunk";
import {ProfileType} from "../../types/profilePageTypes";
import {ActionsType} from "../../redux/actions/actionCreatorTypes";



export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

type PathParamsType = {
    userId: string
}

export type withRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


export class ProfileContainer extends React.Component<withRouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorizedUserId)
        }
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)

    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }

}


let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<ReduxStateType, undefined, ActionsType>) => {
    return {
        setUserProfile: (userId: number) => {
            dispatch(setUserProfileTC(userId))
        },
        getUserStatus: (userId: number) => {
            dispatch(getUserStatusTC(userId))

        },
        updateUserStatus: (status: string) => {
            dispatch(updateUserStatusTC(status))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)
(ProfileContainer);


