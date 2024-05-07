import React from 'react';
import Chat from "../Chat";
import {ChatMessageType} from "../../../api/chatApi";

export const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    );
};

export default ChatPage;