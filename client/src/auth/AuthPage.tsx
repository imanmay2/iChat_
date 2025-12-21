import styles from "./css/AuthPage.module.css";
import React from "react";
import logo from "./iChat.png";
import Login from "./Login";
import Signup from "./Signup";

const AuthPage = (): any => {
  let [isLogin,setIsLogin]=React.useState<boolean>(true);
  return (
    <>
      <div className={styles.main}>
       <div className={styles.logo}><img src={logo} alt="image"/></div>
       {isLogin?<Login setIsLogin={setIsLogin} />:<Signup setIsLogin={setIsLogin} />}
      </div>
    </>
  )
}

export default AuthPage;