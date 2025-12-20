import styles from "./css/login.module.css";
const Login = (): any => {
  return (
    <div className={styles.main}>
      <div>
        <h4>Welcome to iChat</h4> <p className={styles.heading}>Sign in to continue</p>
      </div>


      {/* Form for signing in */}
      <div className={styles.form}>
        <label htmlFor="email">Email</label> <br />
        <input type="text" id="email"  placeholder="&nbsp;&nbsp;xyz@yahoo.com"/>

        <br />
        <br /> 

        <label htmlFor="Password">Password</label> <br />
        <input type="password" id="Password"  placeholder="&nbsp;&nbsp;Type your password..."/>

        <br /><br />
        <p className={styles.forgotPassword}>Forgot Password?</p> <br />  
        <button className={styles.btn}>Sign In</button> <br /><br />
        <br />
        <hr/> <br />
        <p className={styles.style1}>Don't have an account ? <span className={styles.style2}>Sign Up</span></p> <br />
      </div>
    </div>
  )
}



export default Login;