import styles from './css/SideBar.module.css';
import SideBarContacts from './SideBarContacts';
import logo from './iChat.png';
import { useState } from 'react';
import { LuLogOut } from "react-icons/lu";
import type { SideBarChats } from '../types';
import { ct } from '../data';
import { useNavigate } from 'react-router-dom'
const SideBar = () => {
    let [contacts, setContacts] = useState<Array<SideBarChats>>(ct);

    let navigate = useNavigate();

    let logoutClick = () => {
        navigate("/");
        //set the cookies too.
    }
    return (
        <div className={styles.main}>
            <div className={styles.first}><img src={logo} alt="iChat_Logo" className={styles.imgLogo} />
                <p className={styles.head}>iChat</p><LuLogOut className={styles.exit} onClick={logoutClick} />
            </div>

            <input type="text" name="search" value="" placeholder='Search chats...' className={styles.search} /> <br />


            <SideBarContacts/>

        </div>
    )
}

export default SideBar;