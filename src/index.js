import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyAblHdoAj7M_ZR2DET72QDztBGCaVzgXHg",
  authDomain: "joban-netflix.firebaseapp.com",
  databaseURL: "https://joban-netflix-default-rtdb.firebaseio.com",
  projectId: "joban-netflix",
  storageBucket: "joban-netflix.appspot.com",
  messagingSenderId: "78614670187",
  appId: "1:78614670187:web:b2623b895c0b8e03003a2e",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
