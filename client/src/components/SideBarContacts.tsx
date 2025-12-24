import styles from './css/SideBar.module.css';

const SideBarContacts=()=>{
    return(
        <div className={styles.main}>
            <div className={styles.short}>
                SJ
            </div>

            <div className={styles.details}>
                <p className={styles.name}>Sarah Johnson</p>
                <p className={styles.lastMsg}>See you tommorrow</p>
            </div>

            <div className={styles.lastTime}>
                2.45PM
            </div>
        </div>
    )
}

export default SideBarContacts;