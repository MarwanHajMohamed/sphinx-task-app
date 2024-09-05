import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentTable from "./Components/StudentTable/StudentTable";
import ProfilePage from "./Components/ProfilePage/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={StudentTable} />
        <Route path="/student/:studentId" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
