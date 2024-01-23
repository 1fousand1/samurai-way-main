import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {UserType} from "../../../../types/usersTypes";
import {maxLengthCreator, required} from "../../../../utils/validators/validtors";
import {Textarea} from "../../../common/FormsControl/FormsControl";



export type FormDataType = {
    newPostText: string
    currentUser: UserType
}

let maxLength10 = maxLengthCreator(10);

export const PostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required,maxLength10]}
                    component={Textarea}
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