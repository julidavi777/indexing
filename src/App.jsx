import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Button from "./components/button";
import Sidebar from "./components/Sidebar";
import Img from "./components/Img";
import Header from "./components/Header";
import doggy from "./assets/IMG/doggy.jpg";
import DivList from "./components/DivList";
import DivTable from "./components/DIvTable";
import btc from "./assets/icons/btc.svg";
import wallet from "./assets/icons/wallet.png";
import Play from "./assets/icons/playTriangle.png";
import SatoshiShow from "./pages/SatoshiShow";
import Main from "./pages/Main";
import AddForm from "./pages/AddForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/satoshi-show" element={<SatoshiShow />} />
        <Route path="/add-form" element={<AddForm />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
