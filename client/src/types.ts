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

interface Props{
    setIsLogin:React.Dispatch<React.SetStateAction<boolean>>
}
export type {loginCredentials, registerCredentials,Props};