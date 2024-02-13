import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  function handleButtonClicked() {
    // validate the form data
    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    // Sign in/Sign up
  }

  return (
    <div className="">
      <Header />
      <div className="absolute  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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
