import styles from './css/Signup.module.css';
import type {Props} from '../types';
import type { registerCredentials } from '../types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = ({setIsLogin}: Props) => {
  let navigate=useNavigate();
  let [registerData,setRegisterData]=useState<registerCredentials>({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });


  let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    let {name,value}=e.currentTarget;

    setRegisterData((currData:registerCredentials)=>{
      return{
        ...currData,[name]:value
      }
    })
  }
  

  let handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(registerData);
    navigate(`/chat/${registerData.email}`,{state:registerData});
    setRegisterData({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  }


  return (
    <div className={styles.main}>
    Create Account<span className={styles.signupText}>Join iChat today!</span>


     {/* Signup Form */}
     <form className={styles.signupForm} onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
        <input type="text" name="name" className={styles.input} placeholder='Manmay Chakraborty' onChange={handleChange}/>
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className={styles.input} placeholder='imanmay2@gmail.com' onChange={handleChange}/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className={styles.input}  placeholder='********' onChange={handleChange}/>
        <br />
        <label htmlFor="c_password">Confirm Password</label>
        <input type="password" name="c_password" className={styles.input} placeholder='********' onChange={handleChange}/><br />
        <br /> 
        <button className={styles.signupButton}>Create Account</button> <br />
        <br /><hr /> <br />
        <p className={styles.loginText}>Already have an account? <span className={styles.style2} onClick={()=>setIsLogin(true)}>Log In</span></p>
     </form>
  </div>
  )
}

export default Signup;