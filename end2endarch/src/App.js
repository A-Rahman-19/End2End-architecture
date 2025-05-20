import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/routes";
import Header from "./Components/header";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
        {/* <Header/>  */ } 
          <AppRoutes />
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
