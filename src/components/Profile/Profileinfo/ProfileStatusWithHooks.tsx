import React, {ChangeEvent, useState} from 'react';


type ProfileStatusPropsType = {
    status: string,
    updateUserStatus: (status: string) => void

}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const {status, updateUserStatus} = props

    let [editMode, setEditMode] = useState(false);
    let [localStatus, setLocalStatus] = useState(status);

    const onUpdateStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }
        const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                deactivateEditMode()
            }
        }



    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(localStatus)
    }




    return (
        <div>
            {!editMode ?
                <p onDoubleClick={activateMode}>{status || "No status"}</p>
                : <div>
                    <input
                        onChange={onUpdateStatusChangeHandler}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        onKeyPress={onPressEnter}
                        value={localStatus}
                    />
                </div>
            }
        </div>
    );

};

