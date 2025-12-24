import styles from './css/SideBar.module.css';
import logo from './iChat.png';
import { LuLogOut } from "react-icons/lu";
const SideBar = () => {
    return (
        <div className={styles.main}>
            <div className={styles.first}><img src={logo} alt="iChat_Logo" />
            <p className={styles.head}>iChat</p><LuLogOut className={styles.exit}/>
            </div>
        </div>
    )
}

export default SideBar;