import React from 'react';

import {connect} from "react-redux";
import {UsersPageType, UserType} from "../../redux/store";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";


type MapStatePropsType = {
    usersPage: UsersPageType
}


type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void
}


export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        usersPage: state.usersReducer
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId:number) => {
             dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }

    }
}





const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;