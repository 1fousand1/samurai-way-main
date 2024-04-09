import React from "react";
import {Header} from "./Header";
import {ReduxStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/thunks/authThunk";


export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    logout: () => void
}


class HeaderContainer extends React.Component<HeaderContainerPropsType> {

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


const headerContainer = connect(mapStateToProps, {logout: logoutTC})(HeaderContainer)

export default headerContainer