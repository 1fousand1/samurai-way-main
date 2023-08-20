import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    setAuthUserData: (id: number, login: string, email:string) => void

}


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
       authAPI.me()
            .then(response => {
                    if (response.data.resultCode === 0) {
                       let {id, login, email} = response.data.data
                        this.props.setAuthUserData(id,login,email)
                    }
                }
            );
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
    }

}


let mapStateToProps = (state: ReduxStateType): MapStatePropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setAuthUserData: (id: number, login: string, email:string) => {
            dispatch(setAuthUserDataAC(id,email,login))
        }
    }
}

const headerContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

export default headerContainer