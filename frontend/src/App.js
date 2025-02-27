import Home from "./Home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <h1 className="bg-gray-900 text-white h-screen p-2">
    <Routes>
    <Route exact path="/" element={<Home/>} />
    
    </Routes>
      
    </h1>
    </>
  );
}

export default App;
