import About from "./pages/About";
import { BrowserRouter, Routes, Route }

function App() {

  /*
    npm install react-router-dom

    라우팅:
    어떤 요청을 어디로 안내 및 매핑을 할 것인지 정해놓고 진행하는 것으로
    리액트에서는 요청에 따라 요청에 매핑 된 컴포넌트를 랜더링한다.

    BorwsweRouter : 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
    Routes : Route를 묶어주는 단위(컴포넌트)
    route : url 요청 주소와 컴포넌트를 매핑해주는 단위 (컴포넌트)
   */
  return (
    <>
      <BrowserRouter>/* Controller랑 비슷한 역할 */
        <Routes>  /* 양파망? 같은역할 */
        /* index  루트 요청시 응답할 라우터*/
          <Route index element={} />
          /* path는 해당 리소스에 대해 응답할 엘리먼트*/
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
