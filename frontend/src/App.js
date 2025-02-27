import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import AllTasks from "./pages/AllTasks"


function App() {
  return (
    <>
    <h1 className="bg-gray-900 text-white h-screen p-2">
    <Routes>
    <Route exact path="/" element={<Home/>} >
    <Route index element={<AllTasks/>}>
    <Route path="/importantTasks" element={<ImportantTasks/>} />
    </Route>
    
    </Routes>
      
    </h1>
    </>
  );
}

export default App;
