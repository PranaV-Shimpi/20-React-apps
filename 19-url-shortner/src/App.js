import "./App.css";
import Banner from "./components/Banner/Banner";
import UrlShortener from "./components/UrlShortener/UrlShortener";
import Background from "./components/Background/Background";

function App() {
  return (
    <div>
      <Banner />
      <Background />
      <UrlShortener />
    </div>
  );
}

export default App;
