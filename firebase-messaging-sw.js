importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyC-4FUUyGrUxM2gOzhl9OAbR0J-yj1f0Nk",
  authDomain: "turtle-10f6a.firebaseapp.com",
  projectId: "turtle-10f6a",
  storageBucket: "turtle-10f6a.appspot.com",
  messagingSenderId: "792660895330",
  appId: "1:792660895330:web:2a756b3c1908f21af7133b",
  measurementId: "G-QFBPYF3WNF"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});