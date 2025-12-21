import styles from "./css/AuthPage.module.css";
import logo from "./iChat.png";
import Login from "./Login";
import Signup from "./Signup";

const AuthPage = (): any => {
  return (
    <>
      <div className={styles.main}>
       <div className={styles.logo}><img src={logo} alt="image"/></div>
       <Signup />
      </div>
    </>
  )
}

export default AuthPage;