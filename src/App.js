import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>

      <header className="App-header">
        <h1>Set List Game</h1>
      </header>

      <p>This will be the app</p>
      <Footer />
    </div>
  );
}

export default App;
