import React, {FC} from 'react';
import {DialogsPropsType} from "./../DialogsContainer";
import {InjectedFormProps} from "redux-form";


export const AddMessageForm: FC<InjectedFormProps<sendMessageFormDataType> & sendMessageExtendsFormDataType>= (props) => {


    return (
        <form >
            <div><textarea
                onChange={onNewMessageChange}
                value={newMessage}
                placeholder="Enter your message"></textarea></div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </form>
    );
};




export default AddMessageForm;