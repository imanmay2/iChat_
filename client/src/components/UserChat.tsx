import styles from "./css/UserChat.module.css"
import SideBar from "./SideBar";
import Chat from './Chat'
const UserChat=()=>{
    return(
        <div className={styles.main}>
            <SideBar/>
            <Chat/>
        </div>
    )
}

export default UserChat;