import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/routes";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
