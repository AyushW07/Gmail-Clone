import React from "react";
import styles from "./Login.module.css";
import GoogleButton from "react-google-button";
import { provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { getAuth, signInWithPopup } from "firebase/auth";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail"
        />
      </div>
      <GoogleButton onClick={signIn} />
    </div>
  );
}

export default Login;
