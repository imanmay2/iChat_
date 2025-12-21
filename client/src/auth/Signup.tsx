import styles from './css/Signup.module.css';
import React from 'react';
interface Props{
    setIsLogin:React.Dispatch<React.SetStateAction<boolean>>
}

const Signup = ({setIsLogin}: Props) => {
  return (
    <div className={styles.main}>
    Create Account<span className={styles.signupText}>Join iChat today!</span>


     {/* Signup Form */}
     <div className={styles.signupForm}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" className={styles.input} placeholder='&nbsp;&nbsp;imanmay2_'/>
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className={styles.input} placeholder='&nbsp;&nbsp;imanmay2@gmail.com'/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className={styles.input}  placeholder='&nbsp;&nbsp;********'/>
        <br />
        <label htmlFor="c_password">Confirm Password</label>
        <input type="password" name="c_password" className={styles.input}   placeholder='&nbsp;&nbsp;********'/><br />
        <br /> 
        <button className={styles.signupButton}>Create Account</button> <br />
        <br /><hr /> <br />
        <p className={styles.loginText}>Already have an account? <span className={styles.style2} onClick={()=>setIsLogin(true)}>Log In</span></p>
     </div>
  </div>
  )
}

export default Signup;