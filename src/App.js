import "./App.css";
import Compose from "./Components/Compose/Compose";
import EmailList from "./Components/EmailList/EmailList";
import Mail from "./Components/Mail/Mail";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSendMailIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./Components/Login/Login";

function App() {
  const sendMailIsOpen = useSelector(selectSendMailIsOpen);

  const user = useSelector(selectUser);

  return (
    <Router>
      {user ? (
        <div className="App">
          <Navbar />

          <div className="App_body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>

          {sendMailIsOpen && <Compose />}
        </div>
      ) : (
        <>
          <Login />
          {user && <Navigate to="/" replace />}
        </>
      )}
    </Router>
  );
}

export default App;
