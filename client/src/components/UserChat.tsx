import styles from "./css/UserChat.module.css"
import SideBar from "./SideBar";
const UserChat=()=>{
    return(
        <div className={styles.main}>
            <SideBar/>
        </div>
    )
}

export default UserChat;