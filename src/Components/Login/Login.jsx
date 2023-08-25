import React from "react";
import styles from "./Login.module.css";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail"
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
