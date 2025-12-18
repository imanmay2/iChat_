import Login from "./Login";

import logo from "./iChat.png";
const AuthPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030713] via-[#101828] to-[#15224b]">
      <div className="pt-10 h-30 w-30 flex flex-col">
        <div className="border-1 border-white rounded-4xl mx-124 my-16 h-md w-md flex flex-col">
          <img src={logo} alt="iChat" className="mx-auto h-23 w-50 rounded-4xl" />
          <p className="center text-white ">Welcome to iChat</p>
          <Login />
        </div>
      </div>
    </div>
  )
};

export default AuthPage;