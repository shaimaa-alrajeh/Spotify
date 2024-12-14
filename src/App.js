import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./NavBar/Nav"; // Adjust the path
import Home from "./Home/Home";
import TopList from "./TopLists";
import General from "./General/General";
import Artists from "./artists";
import BoadCast from "./BoadCast/BoadCast"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TopLists/*" element={<TopList />} />
        <Route path="/General" element={<General />} /> 
        <Route path="/artists" element={<Artists />} /> 
        <Route path="/BoadCast" element={<BoadCast />} /> 


      </Routes>
    </Router>
  );
}

export default App;
