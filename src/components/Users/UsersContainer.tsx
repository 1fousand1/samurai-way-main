import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {UsersPageType, UserType} from "../../redux/store";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


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

let mapDispatchToProps = (disptach: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId:number) => {
             disptach(followAC(userId))
        },
        unfollow: (userId: number) => {
            disptach(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            setUsersAC(users)
        }

    }
}





const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;