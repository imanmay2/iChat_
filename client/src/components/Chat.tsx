
import styles from './css/Chat.module.css'

const Chat = () => {
    return (
        <div className={styles.main}>
            <div className={styles.details}>

                <div className={styles.shortform}> SJ </div>
                <div className={styles.contacts}>
                    <div className={styles.name}>Sara Johnson</div>
                    <div className={styles.status}>Online</div>
                </div>
                <div>
                </div>

            </div>
            <div className={styles.msg}></div>
            <div className={styles.send}></div>
        </div>
    )
}

export default Chat;