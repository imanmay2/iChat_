interface loginCredentials {
  email: string;
  password: string;
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
export type {loginCredentials, registerCredentials,Props,SideBarChats,Signup};