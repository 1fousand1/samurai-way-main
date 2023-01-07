import React from "react";
import s from './Post.module.css';


type PostTypeProps ={
    message: string,
    likesCount: number
}

export function Post(props:PostTypeProps){
    return(
        <div className={s.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
            { props.message }
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}