import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validtors";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {ReduxStateType} from "../../redux/redux-store";
import style from "../common/FormsControl/FormsControls.module.css"
import {loginTC} from "../../redux/thunks/authThunk";


type LoginFormPropsType = {
    captchaUrl: string | null
}

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormDataType>;
type AllSampleFormProps = LoginFormPropsType & InjectedFormProps<LoginFormDataType, LoginFormPropsType>

const LoginForm: React.FC<AllSampleFormProps> = ({handleSubmit, error, captchaUrl}) => {
    return (

        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "Password"})}
            {createField("", "rememberMe", [], Input, {type: "Checkbox"}, "rememberMe")}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from captcha", "captcha", [required], Input, {})}
            {error && <div className={style.formSummaryError}>
                {error} </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormPropsType>({form: "login"})(LoginForm)

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean, captchaUrl: string | null) => void
    isAuth: boolean
    captchaUrl: string | null

}
const Login: React.FC<LoginType> = (props) => {
    const {login, isAuth, captchaUrl} = props
    const onSubmit = (formData: LoginFormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>)
}


type MapStateToPropsType = {
    captchaUrl: string | null
    isAuth: boolean

}

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login: loginTC})(Login);