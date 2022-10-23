import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
// import Home from "./component/Home/Home";
import Home from "./Home.js";
import Api from "./Api.js";

function App() {
  return (
    <div className="App">
      <Api />
      {/* <Home /> */}

      {/* <Header />
      
      <Footer /> */}
    </div>
  );
}

export default App;
