import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import UserChat from "./components/UserChat";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage/>} />
      <Route path="/chat/:user" element=<UserChat/> />
    </Routes>
  );
};

export default App;