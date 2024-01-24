import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import MyPage from "./page/Mypage";
import Login from "./page/Login";
import Layout from "./layouts/Layouts";

import ErrorPage from "./page/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path="main" element={<Main/>} />
          <Route path="mypage" element={<MyPage/>} />
          <Route path="login" element={<Login/>} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
