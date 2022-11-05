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
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/Login" element={<Login />} />
      </Routes>
      <main>
        <header className="App-body">
          <h1>This will be the body of the app</h1>
        </header>
      </main>
      <Footer />
    </div>
  );
}

export default App;
