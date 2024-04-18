import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ReduxStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ThunkDispatch} from "redux-thunk";
import {ProfileType} from "../../types/profilePageTypes";
import {ActionsType} from "../../redux/actions/actionCreatorTypes";
import {getUserStatusTC, savePhotoTC, setUserProfileTC, updateUserStatusTC} from "../../redux/thunks/profileThunk";
import {InitialStateType} from "../../redux/reducers/profile-reducer";
import {UserType} from "../../types/usersTypes";
import {getUsers} from "../../redux/selectors/usersSelector";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
    users: UserType[]
}

type MapDispatchPropsType = {
    setUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
}

type PathParamsType = {
    userId: string
}

export type OwnPropsType = MapStatePropsType & MapDispatchPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType


export class ProfileContainer extends React.Component<ProfilePropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorizedUserId)
        }
        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)

    }

    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }

}


let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        users: getUsers(state)
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
        ,
        savePhoto: (file: string) => {
            dispatch(savePhotoTC(file))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)
(ProfileContainer);


