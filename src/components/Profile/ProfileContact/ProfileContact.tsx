import React from 'react';


type profileContactPropsType = {
    title: string | null
    value: string | null;
}
export const ProfileContact: React.FC<profileContactPropsType> = (
    {
        title,
        value
    }) => {
    return (
        <div>
            <b>{title}</b>{value}

        </div>
    );
};

