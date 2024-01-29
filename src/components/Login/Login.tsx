import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validtors";
import {connect} from "react-redux";
import {loginTC} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReduxStateType} from "../../redux/redux-store";
import style from "../common/FormsControl/FormsControls.module.css"


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={"email"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field  type={"Password"} placeholder={"Password"} name={"password"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type={"Checkbox"} name={"rememberMe"}  component={Input}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error} </div>}
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