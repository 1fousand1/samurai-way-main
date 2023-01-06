import React from "react";
import s from './Post.module.css';


export function Post(){
    return(
        <div className={s.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
            Post 1
            <div>
                <span>like</span>
            </div>

        </div>
    )
}