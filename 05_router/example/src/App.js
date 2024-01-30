import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import OneCat from "./components/pages/OneCat";
import TenCat from "./components/pages/TenCat";
import FiveCat from "./components/pages/FiveCat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="one" element={<OneCat/>}/>
          <Route path="ten" element={<TenCat/>}/>
          <Route path="five" element={<FiveCat/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
  fetch 문을 사용하여 고양이 사진을 출력하는 사이트
*/