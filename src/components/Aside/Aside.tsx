import {useLocation} from 'react-router-dom';
import {Navbar} from "./Navbar/Navbar";
import {AsidePropsType} from "./AsideContainer/AsideConatiner";





export const Aside = (props: AsidePropsType) => {
    const {users} = props

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <aside>
            <div >
                    <Navbar/>
            </div>
        </aside>
    )
}