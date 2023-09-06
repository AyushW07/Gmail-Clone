import React from "react";
import styles from "./Login.module.css";
import GoogleButton from "react-google-button";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //   const signIn = () => {
  //     auth
  //       .signInWithPopup(provider)
  //       .then(({ user }) => {
  //         dispatch(
  //           login({
  //             displayName: user.displayName,
  //             email: user.email,
  //             photoUrl: user.photoURL,
  //           })
  //         );
  //       })
  //       .catch((error) => alert(error.message));
  //   };

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(result);

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
      </div>
      <GoogleButton onClick={signIn} />
    </div>
  );
}

export default Login;
