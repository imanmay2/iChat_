import styles from "./css/login.module.css";
import React from "react";
import type { Props } from '../types';
import type { loginCredentials } from "../types";
import { useNavigate } from "react-router-dom";


const Login = ({ setIsLogin }: Props): any => {
  let navigate=useNavigate();
  let [loginData, setLoginData] = React.useState<loginCredentials>({
    email: "",
    password: ""
  });


  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setLoginData((currData: loginCredentials) => {
      return {
        ...currData, [name]: value
      }
    })
  }

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(loginData);
    navigate(`/chat/${loginData.email}`,{state:loginData});
    setLoginData({
      email: "",
      password: ""
    });
  }

  return (
    <div className={styles.main}>
      <div>
        <h4>Welcome to iChat</h4> <p className={styles.heading}>Sign in to continue</p>
      </div>


      {/* Form for signing in */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label> <br />
        <input className={styles.inputLogin} type="text" id="email" placeholder="xyz@yahoo.com" name="email" value={loginData.email} onChange={handleChange} />

        <br />
        <br />

        <label htmlFor="Password">Password</label> <br />
        <input className={styles.inputLogin}  type="password" id="Password" placeholder="********" name="password" value={loginData.password} onChange={handleChange} />

        <br /><br />
        <p className={styles.forgotPassword}>Forgot Password?</p> <br />
        <button className={styles.btn} type="submit">Sign In</button> <br /><br />
        <br />
        <hr /> <br />
        <p className={styles.style1}>Don't have an account ? <span className={styles.style2} onClick={() => setIsLogin(false)}>Sign Up</span></p> <br />
      </form>
    </div>
  )
}



export default Login;