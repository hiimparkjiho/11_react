import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Name";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuDetails from "./pages/MenuDetail";
import MenuSearchResult from "./pages/MenuSearchResult";

function App() {

  // useParams, searchParams hooks 기억
  // npm i react-router-dom
  // path":"  :이 들어가는 건 pathVariable을 넣는다는 뜻
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="main" element={<Main/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="menu">
            <Route index element={<Menu/>} />
            <Route path=":menuCode" element={<MenuDetails/>} />
            <Route path="search" element={<MenuSearchResult/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
