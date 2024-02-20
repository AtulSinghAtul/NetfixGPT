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
- Custom hook for now playing movies list api
- Create MovieSlice
- Update state with movies Data
- Planning for MainContainer & secondary container
- fetch data for trailer videos
- update store with trailervideos data
- embedded the youtube video and make it autoplay and mute
- Tailwind classes to make Main container look awesome
- Build secondary component
- Build movie list
- Build movie card
- TMDB poster image cdn url
- created custom hooks usePopularMovies, useTopRatedMovies and useUpComingMovies
- Created GPT Search Page
- Created GPT Search Bar
- Multi-Language Features in our App
-

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

## Memoization?

- Suppose in my redux store already had the trailer, popular or upcoming video should I re-fetch it API - No, this concept is known as memoization.

- Suppose 1 lack users are on your website they are going on different pages, so you can save so many api calls only writing 3-4 lines of code.

```
const trailerVideo = useSelector((store)=>store.movies.trailerVideo)

useEffect(()=>{
  if(!trailerVideo) useMovieTrailer()
},[])
```

```
const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)

useEffect(()=>{
  if(!nowPlayingMovies) useNowPlayingMovies()
},[])
```
