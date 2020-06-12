import React, {useState} from 'react';

// Moods
import ApplicationViews from './components/ApplicationViews';
import NavBar from './components/NavBar/NavBar';
import Welcome from './components/Welcome/Welcome'
import API from './modules/GeneralModule'

function Nutshell() {

    /* LOGIN FEATURES */
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  const [hasUser, setHasUser] = useState(isAuthenticated())
  // const [user, setUser] = useState({})

  const setUser = async (user) => {
    user = await API.getUserId(user.email)
    console.log(user)
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

return  <>
  <NavBar hasUser={hasUser} />
  <ApplicationViews setUser={setUser} hasUser={hasUser} /> 
  </>
}
export default Nutshell;