import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ReduxStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {ProfileType} from "../../redux/store";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {usersAPI} from "../../api/api";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
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
        usersAPI.getProfile(userId).then(response => {
                this.props.setUserProfile(response.data);

            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

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


