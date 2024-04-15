import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {lazy} from 'react';

import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeTC} from "./redux/thunks/appThunk";
import {ReduxStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
const LoginContainer = lazy(() => import("./components/Login/Login"))
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"))


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.isInitialized) return <Preloader/>

        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path="/" render ={()=> <Redirect to='/profile'/>}/>
                            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                            <Route path='/users' render={withSuspense(UsersContainer)}/>
                            <Route path='/login' render={withSuspense(LoginContainer)}/>
                        </Switch>
                    </div>
                </div>
        );
    }
}

type MapStateToPropsType = {
    isInitialized: boolean
    isAuth: boolean
}

type MapDispatchToProps = {
    initialize: () => void
}

export type AppPropsType = MapStateToPropsType & MapDispatchToProps
const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({
    isInitialized: state.app.isInitialized,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initialize: initializeTC}))(App)
