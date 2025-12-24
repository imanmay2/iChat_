import styles from './css/SideBar.module.css';
import SideBarContacts from './SideBarContacts';
import logo from './iChat.png';
import { useState } from 'react';
import { LuLogOut } from "react-icons/lu";
import type {SideBarChats} from '../types';
import {ct} from '../data';
const SideBar = () => {
    let [contacts,setContacts]=useState<Array<SideBarChats>>(ct);

    return (
        <div className={styles.main}>
            <div className={styles.first}><img src={logo} alt="iChat_Logo" className={styles.imgLogo}/>
            <p className={styles.head}>iChat</p><LuLogOut className={styles.exit}/>
            </div>

            <input type="text" name="search" value="" placeholder='Search chats...' className={styles.search}/> <br />

            <div className={styles.contacts}>
                <SideBarContacts/>
            </div>
        </div>
    )
}

export default SideBar;