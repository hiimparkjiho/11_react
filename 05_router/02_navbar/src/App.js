import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/main";
import Mypage from "./page/Mypage";
import Login from "./page/Login";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/> }/>
      <Route index element={<Main/> }/>
      <Route path="main" element={<Main/>} />
      <Route path="mypage" element={<Mypage/>} />
      <Route path="login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
