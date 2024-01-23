import React from "react";
import {Header} from "./Header";
import {ReduxStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData, logoutTC} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    logout: () => void
    getAuthUserData: () => void

}


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }

}



let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}



const headerContainer = connect(mapStateToProps, {getAuthUserData, logout: logoutTC})(HeaderContainer)

export default headerContainer