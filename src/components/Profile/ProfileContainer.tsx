import React from "react";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {Profile} from "./Profile";
import axios from "axios";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import usersContainer from "../Users/UsersContainer";
import {ProfileType} from "../../redux/store";
import {setUserProfileAC} from "../../redux/profile-reducer";

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);

            });
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state: ReduxStateType):MapStatePropsType => {
    return {
        profile: state.profileReducer.profile
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile: (profile: ProfileType) => {
           dispatch(setUserProfileAC(profile))
        }
    }
}

const profileContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)

export default profileContainer;