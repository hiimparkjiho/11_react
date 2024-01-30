import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Main from "./page/Main";
import Menus from "./components/items/Menus";
import MenuDetail from "./page/MenuDetail";
import MenuRegist from "./page/MenuRegist";
import MenuModify from "./page/MenuModify";
import Login from "./page/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="menu">
            <Route index element={<Menus/>}/>
            <Route path=":id" element={<MenuDetail/>}/>
            <Route path="regist" element={<MenuRegist/>}/>
            <Route path="modify">
              <Route path=":id" element = {<MenuModify/>}/>
            </Route>
          </Route>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
