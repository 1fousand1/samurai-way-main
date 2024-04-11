import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validtors";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {ReduxStateType} from "../../redux/redux-store";
import style from "../common/FormsControl/FormsControls.module.css"
import {loginTC} from "../../redux/thunks/authThunk";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (

        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "Password"})}
            {createField("","rememberMe",[], Input, {type: "Checkbox"}, "rememberMe")}
            {error && <div className={style.formSummaryError}>
                {error} </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
const Login: React.FC<LoginType> = (props) => {
    const {login, isAuth} = props
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        debugger
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)
}


type MapStateToPropsType = {
    isAuth: boolean

}

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login: loginTC})(Login);