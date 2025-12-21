import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import User from "./components/UserChat";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage/>} />
      <Route path="/chat/:user" element=<User/> />
    </Routes>
  );
};

export default App;