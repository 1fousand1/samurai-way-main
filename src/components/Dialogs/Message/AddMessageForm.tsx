import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    newMessageBody: string
}

/*const maxLengthText = maxLengthCreator(50)*/

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
                <form onSubmit={props.handleSubmit}>
                    <div>
                    <Field
                        component="textarea"
                        placeholder="Enter your Message"
                        name="newMessageBody"
                    />
                    <button>Send</button>
                    </div>
                </form>
    );
};

export const DialogsFormRedux = reduxForm<FormDataType>({form: 'dialogsForm'})(AddMessageForm)