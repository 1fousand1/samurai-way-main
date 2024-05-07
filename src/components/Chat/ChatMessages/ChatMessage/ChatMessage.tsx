import React from 'react';
import {ChatMessageType} from "../../../../api/chatApi";

type ChatMessagePropsType = {
    id: number
    message: ChatMessageType
}

const ChatMessage: React.FC<ChatMessagePropsType> = ({message}) => {

    let path = `/profile/${message.userId}`


    return (
        <div>

            <div>
                <img src={message.photo} alt="contact-avatar"/>
            </div>
            <div>
                <div>
                    {`${message.userName}`}
                </div>
                <div>
                    {message.message}
                </div>
            </div>

        </div>
    );
};

export default ChatMessage;