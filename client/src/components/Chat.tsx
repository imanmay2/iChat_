
import styles from './css/Chat.module.css'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { GoPaperclip } from "react-icons/go";
import { FiSend } from "react-icons/fi";
const Chat = () => {
    return (
        <div className={styles.main}>
            <div className={styles.details}>
                <div className={styles.shortform}> SJ </div>
                <div className={styles.contacts}>
                    <div className={styles.name}>Sara Johnson</div>
                    <div className={styles.status}>Online</div>
                </div>

                <div className={styles.icons}>
                    <IoCallOutline className={styles.callIcon} />
                    <MdOutlineVideoCall className={styles.videoCallIcon} />
                </div>

            </div>
            <div className={styles.msg}>
                messages will be shown here.
            </div>
            <div className={styles.send}>
                <GoPaperclip className={styles.paperClip}/>
                <input type="text" name="typeMsg" placeholder='Type your message here...'/>
                <FiSend className={styles.sendIcon}/>
            </div>
        </div>
    )
}

export default Chat;