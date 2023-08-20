import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ReduxStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {ActionsType, ProfileType} from "../../redux/store";
import {getUserStatusTC, setUserProfileTC, updateUserStatusTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ThunkDispatch} from "redux-thunk";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    setUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
}

type PathParamsType = {
    userId: string
}

export type withRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


export class ProfileContainer extends React.Component<withRouterPropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 2
        }
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)


    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>
        )
    }

}


let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status
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
        updateStatus: (status: string) => {
            dispatch(updateUserStatusTC(status))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)
(ProfileContainer);


