import React, {ChangeEvent, useState} from 'react';
import {chatAPI} from "../../../api/chatApi";
import {useDispatch, useSelector} from "react-redux";
import {sendChatMessageTC} from "../../../redux/thunks/chatThunk";
import {getChatStatus} from "../../../redux/selectors/chatSelectors";

const ChatForm: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const status = useSelector(getChatStatus)

    const dispatch = useDispatch()
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const sendMessageHandler = () => {
        if (!message) {
            return
        }

        dispatch(sendChatMessageTC(message))
        setMessage('')
    }

    const isDisabled = status !== 'ready'

    return (
        <div>
            <textarea value={message} onChange={onChangeMessageHandler}></textarea>
            <button disabled={isDisabled} onClick={sendMessageHandler}>Send</button>
        </div>
    );
};

export default ChatForm;