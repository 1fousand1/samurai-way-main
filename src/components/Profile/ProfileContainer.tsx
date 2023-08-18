import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";
import {ReduxStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {ProfileType} from "../../redux/store";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export class ProfileContainer extends React.Component<withRouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);

            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

const AuthRedirectComponent = (props: withRouterPropsType) => {
    return <ProfileContainer {...props}/>
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: string
}

export type withRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}


let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        profile: state.profileReducer.profile,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile: (profile: ProfileType) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)
    (ProfileContainer);


