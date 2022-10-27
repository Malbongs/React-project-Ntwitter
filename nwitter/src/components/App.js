import React,{ useState } from "react";
import AppRouter from "components/Router";

import { authService } from "fbase";



function App() {
  const [isLoggeIn,setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
    <AppRouter isLoggeIn={isLoggeIn}  />
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>

    </>
  ) 
  }


export default App;
