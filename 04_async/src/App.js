import AxiosCallComponent from "./02_api/03_axios";
import ImojiContainer from "./02_api/04_github-api-emoji";
import Container from "./03_data-component/01_rendering-component";
import Weather from "./03_data-component/02_weather-promise";
import WeatherContainer from "./03_data-component/03_weather-async-await";
import TopScorePlayer from "./03_data-component/04_example";
import RandonImgContainer from "./03_data-component/05_example2";

function App() {
  return (
    <div className="App">
      {/* <AxiosCallComponent/> */}
      {/* <ImojiContainer/> */}
      {/* <Container/> */}
      {/* <Weather/> */}
      {/* <WeatherContainer/> */}
      <RandonImgContainer/>
    </div>
  );
}

export default App;
