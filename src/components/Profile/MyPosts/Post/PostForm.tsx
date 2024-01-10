import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {UserType} from "../../../../types/usersTypes";



export type FormDataType = {
    newPostText: string
    currentUser: UserType
}
export const PostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={"textarea"}
                    placeholder={"What's new?"}
                    name="newPostText"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

export const PostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(PostForm)