import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/storeSlices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUES } from "../utils/constants";
import { toggleGptSearch } from "../utils/storeSlices/gptSlice";
import { changeSearchLanguage } from "../utils/storeSlices/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptLangToggle = useSelector((store) => store.gpt.toggleGptSearchView);
  // console.log(user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const langHandleChange = (e) => {
    //Note:- event ki jagah ham useRef() bhi use kar sakte hain select ki value nikalne k liye
    dispatch(changeSearchLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10  flex justify-between items-center">
      <img className="w-[220px]" src={LOGO} alt="netflix-logo" />

      <div className="pr-8">
        {user && (
          <div
            className="flex
          justify-center items-center gap-2"
          >
            {gptLangToggle && (
              <select
                className="bg-black text-white"
                onClick={langHandleChange}
              >
                {SUPPORTED_LANGUES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleGptSearchClick}
              className="text-white text-sm bg-purple-600 px-4 py-2 rounded-md"
            >
              {gptLangToggle ? "Go To Home" : "GPT Search"}
            </button>
            <img className="w-[50px]" src={user?.photoURL} alt="profile-img" />

            <button
              onClick={handleSignout}
              className="text-white text-sm bg-red-600 px-4 py-2 rounded-md"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
