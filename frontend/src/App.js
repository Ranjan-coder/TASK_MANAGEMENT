import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompletedTasks from "./pages/IncompletedTasks";


function App() {
  return (
    <>
      <h1 className="bg-gray-900 text-white h-screen p-2">
        <Routes>
          <Route exact path="/" element={<Home />}>
          <Route index element={<AllTasks />}/>
              <Route path="/importantTasks" element={<ImportantTasks />} />
              <Route path="/completedTasks" element={<CompletedTasks />} />
              <Route path="/incompleteTasks" element={<IncompletedTasks/>} />
            </Route>

        </Routes>

      </h1>
    </>
  );
}

export default App;
