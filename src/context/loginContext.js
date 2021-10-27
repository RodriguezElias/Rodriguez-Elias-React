import { useState, createContext, useContext, useEffect } from "react";
import firebase from "firebase";
import swal from 'sweetalert';

const loginContext = createContext();

export const useLoginContext = () => useContext(loginContext);

export default function LoginContextProvider({ children }) {
  useEffect(() => {
    setUser(
      sessionStorage.getItem(
        "firebase:authUser:AIzaSyBf4aArPvd7bARigOg1T3zU2dq2Fj-66oA:[DEFAULT]"
      )
    );
  }, []);
  const [user, setUser] = useState("");

  const logIn = (email,password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Signed in
        setUser(
          sessionStorage.getItem(
            "firebase:authUser:AIzaSyBf4aArPvd7bARigOg1T3zU2dq2Fj-66oA:[DEFAULT]"
          )
        );
        swal("Login exitoso", "Se inicio sesion correctamente, puede realizar tareas de administrador", "success");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
        swal("Error de sesion", "Contraseña o usuario incorrecto, vuelve a intentar!", "error");
      });
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        setUser(res);
        swal("Logout exitoso", "Se cerro la sesion");
      });
  };
  return (
    <loginContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </loginContext.Provider>
  );
}
