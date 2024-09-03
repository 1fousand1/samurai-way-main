import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Users } from "../Users";
import { Preloader } from "../../common/Preloader/Preloader";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter,
} from "../../../redux/selectors/usersSelector";

import { followTC, getUsersTC, unFollowTC } from "../../../redux/thunks/usersThunks";
import { setCurrentPageAC, setUsersAC } from "../../../redux/actions/usersAction";
import { UserType } from "../../../types/usersPageType";
import { FilterType } from "../../../redux/reducers/users-reducer";

type MapStatePropsType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
    filter: FilterType;
};

type MapDispatchPropsType = {
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void;
    changePage: (currentPage: number, pageSize: number) => void;
};

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const { currentPage, pageSize, getUsers } = this.props;
        getUsers(currentPage, pageSize, { term: "", friend: null });
    }

    onPageChanged = (currentPage: number) => {
        const { pageSize, filter } = this.props;
        this.props.getUsers(currentPage, pageSize, filter);
    };

    onFilterChanged = (filter: FilterType) => {
        const { pageSize } = this.props;
        this.props.getUsers(1, pageSize, filter);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    onFilterChanged={this.onFilterChanged}
                    followingInProgress={this.props.followingInProgress}
                    filter={this.props.filter}
                />
            </>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state),
    };
};

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        getUsers: getUsersTC,
        follow: followTC,
        unFollow: unFollowTC,
    }),
)(UsersContainer);
