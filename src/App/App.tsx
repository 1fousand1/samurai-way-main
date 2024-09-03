import React from "react";
import "./App.module.css";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { lazy } from "react";

import { HeaderContainer } from "../components/Header/HeaderContainer/";
import { connect } from "react-redux";
import styles from "./App.module.css";
import { compose } from "redux";
import { initializeTC } from "../redux/thunks/appThunk";
import { AppStateType } from "../redux/redux-store";
import { Preloader } from "../components/common";
import { withSuspense } from "../hoc/withSuspense";
import NotFound404 from "../components/common/NotFound404/NotFound404";
import { ChatPage } from "../components/Chat/ChatPage/ChatPage";
import { AsideContainer } from "../components/Aside/AsideContainer";
import { News } from "../components/News";
import Settings from "../components/Settings/Settings";

const DialogsContainer = lazy(() => import("../components/Dialogs/DialogContainer/DialogsContainer"));
const ProfileContainer = lazy(() => import("../components/Profile/ProfileContainer/ProfileContainer"));

const ChatContainer = React.lazy(() => import("../components/Chat/ChatPage/ChatPage"));
const LoginContainer = lazy(() => import("../components/Login/Login"));
const UsersContainer = lazy(() => import("../components/Users/UsersContainer/UsersContainer"));

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.isInitialized) return <Preloader />;

        return (
            <div className={styles.root}>
                <HeaderContainer />
                <div className={styles.container}>
                    {this.props.isAuth && <AsideContainer />}
                    <div className={styles.content}>
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/profile" />} />
                            <Route path="/messages" render={withSuspense(DialogsContainer)} />
                            <Route path="/chat" render={() => <ChatPage />} />
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
                            <Route path="/users" render={withSuspense(UsersContainer)} />
                            <Route path="/news" render={() => <News />} />
                            <Route path="/settings" render={() => <Settings />} />

                            <Route path="/login" render={withSuspense(LoginContainer)} />
                            <Route path="*" render={() => <NotFound404 />} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {
    isInitialized: boolean;
    isAuth: boolean;
};

type MapDispatchToProps = {
    initialize: () => void;
};

export type AppPropsType = MapStateToPropsType & MapDispatchToProps;
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isInitialized: state.app.isInitialized,
    isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initialize: initializeTC }))(App);
