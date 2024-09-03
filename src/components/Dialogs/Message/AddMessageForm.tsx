import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControl/FormsControl";
import { maxLengthCreator, required } from "../../../utils/validators/validtors";

export type FormDataType = {
    newMessageBody: string;
};

const maxLengthText = maxLengthCreator(50);

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    placeholder="Enter your Message"
                    name="newMessageBody"
                    validate={[required, maxLengthText]}
                />
                <button>Send</button>
            </div>
        </form>
    );
};

export const DialogsFormRedux = reduxForm<FormDataType>({ form: "dialogsForm" })(AddMessageForm);
