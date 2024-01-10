import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {UserType} from "../../../../types/usersTypes";



export type FormDataType = {
    newPostText: string
    currentUser: UserType
}
export const PostForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <textarea onChange={props.onChange} ref={props.ref} value={props.value}/>
            </div>
            <div>
                <button onClick={props.onClick}>Add post</button>
            </div>
        </form>
    );
}

export const PostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(PostForm)