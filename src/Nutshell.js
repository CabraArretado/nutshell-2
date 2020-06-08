import React, {useState} from 'react';

// Moods
import ApplicationViews from './components/ApplicationViews';
import NavBar from './components/NavBar/NavBar';
import Welcome from './components/Welcome/Welcome'

function Nutshell() {

    /* LOGIN */
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  const [hasUser, setHasUser] = useState(isAuthenticated())
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

return  <>
  <NavBar hasUser={hasUser} />
  <ApplicationViews setUser={setUser} hasUser={hasUser} /> 
  </>
}
export default Nutshell;
