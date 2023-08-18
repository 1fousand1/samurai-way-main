import React from 'react';
import {connect} from "react-redux";
import {ActionsType, UsersPageType} from "../../redux/store";
import {ReduxStateType} from "../../redux/redux-store";
import {followTC, getUsersThunkCreator, setCurrentPageAC, unfollowTC} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {ThunkDispatch} from "redux-thunk";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    usersPage: UsersPageType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void

}


export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);

    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   usersPage={this.props.usersPage}
                   setCurrentPage={this.props.setCurrentPage}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   requestUsers={this.props.requestUsers}
            />
        </>

    }

}

let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        usersPage: state.usersReducer,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress

    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<ReduxStateType, undefined, ActionsType>): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followTC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowTC(userId))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        requestUsers: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        }

    }
}

export default compose<React.ComponentType>(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(UsersContainer)


