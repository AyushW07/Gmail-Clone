import "./App.css";
import Compose from "./Components/Compose/Compose";
import EmailList from "./Components/EmailList/EmailList";
import Mail from "./Components/Mail/Mail";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMailIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useEffect } from "react";

function App() {
  const sendMailIsOpen = useSelector(selectSendMailIsOpen);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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
      )}
    </Router>
  );
}

export default App;
