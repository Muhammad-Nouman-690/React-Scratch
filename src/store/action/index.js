import firebase from "../../Components/Database/firebase";
import Firebase from 'firebase';

const set_data = () => {
  return(dispatch) => {  
    dispatch({type: "setDATA", data: data})
}
}
const addData = () => {
    console.log("Ahmed Running...")
}

const login_FB = () => {
    var provider = new Firebase.auth.FacebookAuthProvider();
  
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {    
    var credential = result.credential;
    var user = result.user;
    
    let facebook_user = {
      name: user.displayName,
      email: user.email,
      profile: user.photoURL,
      uId: user.uid
    }

    console.log('User==>',facebook_user);
    
    firebase
    .database()
    .ref("/")
    .child(`FB Login Details/${user.uid}`)
    .set(facebook_user)

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
  }

  const login_Gg = () => {
    var provider = new Firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    let google_user = {
      name: user.displayName,
      email: user.email,
      profile: user.photoURL,
      uId: user.uid
    }

    console.log("Google User",google_user)
    
    firebase
    .database()
    .ref("/")
    .child(`Google Login Details/${user.uid}`)
    .set(google_user)

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
  }

export {
    set_data,
    addData,
    login_FB,
    login_Gg
}