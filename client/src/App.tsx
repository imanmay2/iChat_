import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage/>} />
      <Route path="/chat/:user" element=<User/> />
    </Routes>
  );
};

export default App;