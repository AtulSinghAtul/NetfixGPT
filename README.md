# Netflix-GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of app
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Authentication - Using Google Firebase
- Steps for deployment

  - 0. Install firebase CLI `npm install -g firebase-tools`
  - 1. Firebase login - `firebase login`
  - 2. Initilize Firebase - `firebase init`, then select
       hosting
  - 3. Deploy command - `firebase deploy`

- Create Signup User Account - firebase authentication
- Implement Sign In user Api - firebase authentication
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in redirect /browse to login page and vice-versa
- unsubscribe to the onAuthStateChanged when component unmount
- Add hardcoded value to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDBnow playing movies list API

## Features

- Login/Sign Up

  - Sign In/Sign up Form
  - redirect to browse page

- Browse(after authentication)

  - Header
  - Main Movie
    - Trailer in background
    - Title & Description
    - Movie Suggestion
      - MovieLists \* N

- NetflixGPT
  - Search Bar
  - Movie Suggestions
