import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentTable from "./Components/StudentTable/StudentTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={StudentTable} />
      </Routes>
    </Router>
  );
}

export default App;
