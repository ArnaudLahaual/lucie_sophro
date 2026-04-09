import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { AppRoutes } from "./AppRoutes";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-content">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
