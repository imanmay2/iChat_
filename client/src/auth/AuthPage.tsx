import styles from "./css/AuthPage.module.css";
import logo from "./iChat.png";
import Login from "./Login";
const AuthPage = (): any => {
  return (
    <>
      <div className={styles.main}>
       <div className={styles.logo}><img src={logo} alt="image" /></div>
       <Login />
      </div>
    </>
  )
}



export default AuthPage;