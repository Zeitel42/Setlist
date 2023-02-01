import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import HomePage from "./components/HomePage/homePage";
import SignUp from "./components/SignUp/signup";
import Setlist from "./components/Setlist";
import SongList from "./components/SongList/songList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Setlist" element={<Setlist />} />
        <Route path="/SongList" element={<SongList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
