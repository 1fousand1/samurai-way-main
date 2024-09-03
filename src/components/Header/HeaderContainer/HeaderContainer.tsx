import React from "react";
import { Header } from "../Header";
import { AppStateType } from "../../../redux/redux-store";
import { connect } from "react-redux";
import { logoutTC } from "../../../redux/thunks/authThunk";
import { ProfileType } from "../../../types/profilePageTypes";

import { getCurrentPage, getPageSize, getUsersFilter } from "../../../redux/selectors/usersSelector";
import { getUsersTC } from "../../../redux/thunks/usersThunks";
import { FilterType } from "../../../redux/reducers/users-reducer";

export class HeaderContainerAPI extends React.Component<HeaderPropsType> {
    onFilterChanged = (filterSearch: string) => {
        const { pageSize, filter } = this.props;
        this.props.getUsers(1, pageSize, { friend: filter.friend, term: filterSearch });
    };

    render() {
        return <Header {...this.props} onFilterChanged={this.onFilterChanged} />;
    }
}

type MapStateToPropsType = {
    isAuth: boolean;
    login: string | null;
    profile: ProfileType | null;
    pageSize: number;
    currentPage: number;
    filter: FilterType;
};

type MapDispatchToProps = {
    logOut: () => void;
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void;
};

export type HeaderPropsType = MapStateToPropsType & MapDispatchToProps;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile,
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        filter: getUsersFilter(state),
    };
};

export const HeaderContainer = connect(mapStateToProps, {
    logOut: logoutTC,
    getUsers: getUsersTC,
})(HeaderContainerAPI);
