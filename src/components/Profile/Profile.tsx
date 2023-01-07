import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

/*type ProfileTypeProps = {
    title: string
}*/

export const Profile/*:React.FC<ProfileTypeProps>*/ = () => {
    return (
            <div className={s.content}>
                <div>
                    <img src="https://of-crimea.ru/plug/Peschanye-plyazhi-Kryma.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <MyPosts />
            </div>
    )
}