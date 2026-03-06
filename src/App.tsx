import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppJournal1 from "./components/AppJournal1";
import CryptoAPI from "./components/CryptoAPI";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<AppJournal1 />} />
        <Route path="/crypto" element={<CryptoAPI />} />
      </Routes>
    </div>
  );
};

export default App;
