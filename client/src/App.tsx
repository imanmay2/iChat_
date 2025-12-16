import { Routes, Route } from "react-router-dom";
import AuthPage from "./auth/authPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element=<AuthPage/> />
      
      
    </Routes>
  );
};

export default App;