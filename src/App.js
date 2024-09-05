import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentsList from "./Pages/StudentsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={StudentsList} />
      </Routes>
    </Router>
  );
}

export default App;
