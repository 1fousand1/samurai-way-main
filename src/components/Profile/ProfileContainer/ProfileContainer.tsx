import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { addPostAC } from "../../../redux/actions/profileAction";
import { Profile } from "../Profile";
import { AppStateType } from "../../../redux/redux-store";

import { ProfileType } from "../../../types";

import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { ProfileDataFormType } from "../ProfileDataForm";
import { InitialStateType } from "../../../redux/reducers/profile-reducer";
import { UserType } from "../../../types/usersPageType";
import { FilterType } from "../../../redux/reducers/users-reducer";
import { getUsers } from "../../../redux/selectors/usersSelector";
import {
    getUserProfileTC,
    getUserStatusTC,
    savePhotoTC,
    updateProfileTC,
    updateUserStatusTC,
} from "../../../redux/thunks/profileThunk";
import { getUsersTC } from "../../../redux/thunks/usersThunks";

type PathParamsType = {
    userId: string;
};

type MapStateToPropsType = {
    profilePage: InitialStateType;
    profile: ProfileType | null;
    status: string;
    authorizedUserId: number | null;
    isAuth: boolean;
    users: UserType[];
};

type MapDispatchToProps = {
    addPost: (newPostText: string) => void;
    getUserProfile: (userId: string) => void;
    getUserStatus: (userId: string) => void;
    updateUserStatus: (status: string) => void;
    savePhoto: (file: File) => void;
    updateProfile: (profile: ProfileDataFormType) => Promise<any>;
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void;
};

export type OwnPropsType = MapStateToPropsType & MapDispatchToProps;
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

export class ProfileContainerAPI extends React.Component<ProfilePropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(this.props.authorizedUserId);

            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
        this.props.getUsers(1, 10, { term: "", friend: true });
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
                updateProfile={this.props.updateProfile}
                users={this.props.users}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        users: getUsers(state),
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addPost: addPostAC,
        getUserProfile: getUserProfileTC,
        getUserStatus: getUserStatusTC,
        updateUserStatus: updateUserStatusTC,
        savePhoto: savePhotoTC,
        updateProfile: updateProfileTC,
        getUsers: getUsersTC,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainerAPI);
