import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/storeSlices/userSlice";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClicked = () => {
    // validate the form data
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    // Sign in/Sign up
    if (!isSignInForm) {
      //Sign up Authentication logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          // update user name
          updateProfile(auth.currentUser, {
            displayName: name?.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              console.log("Profile updated!");
            })
            .catch((error) => {
              // An error occurred
              // setErrorMessage(message);
              console.log("Got error");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute  ">
        <img
          src={BACKGROUND_IMG}
          alt="background-img"
          className="w-full min-h-screen -z-50"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80"
      >
        <h1 className="text-4xl font-semibold mb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-[#333333] rounded-sm outline-none "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full bg-[#333333] rounded-sm outline-none "
        />

        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 m-2 w-full bg-[#333333] rounded-sm outline-none"
        />
        <p className="text-red-400">{errorMessage}</p>

        <button
          onClick={handleButtonClicked}
          className="p-4 m-2 mt-9 bg-red-700 w-full rounded-sm"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Allready registered Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
