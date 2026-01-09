interface loginCredentials {
  email: string;
  password: string;
}

interface loginResponse{
  Message:string;
  username?:string;
  err:boolean;
}

interface registerCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Signup{
  name: string;
  email: string;
  password: string;
}

interface Props{
    setIsLogin:React.Dispatch<React.SetStateAction<boolean>>
}


interface SideBarChats{
  name: string,
  lastMsg:string,
  lastTime:string,
  shortFormName:string
}
export type {loginCredentials, registerCredentials,loginResponse,Props,SideBarChats,Signup};