import express, {Request,Response,Application} from 'express';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const { requiresAuth } = require('express-openid-connect');

const app:Application = express();
var path = require('path');
app.use(express.static("public"));

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAshHMLxANSiAtdoY9r9vZuyQbeZLI0iY",
  authDomain: "lifescore-532e4.firebaseapp.com",
  projectId: "lifescore-532e4",
  storageBucket: "lifescore-532e4.appspot.com",
  messagingSenderId: "390123766451",
  appId: "1:390123766451:web:d5e0462fb6cb03279126c6",
  measurementId: "G-E93SMMBSRJ"
};

// Authentication from OAuth

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'QiPtqyVjhysUsf8pAPgabayzcUnPOKFf',
  issuerBaseURL: 'https://dev-x6prcjz9.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));


// Initialize Firebase
const fb = initializeApp(firebaseConfig);
//const analytics = getAnalytics(fb);

// The code below allows the node js to find the public directory with the index.html file
const publicPath = path.join(__dirname, '../public');
// Node js is using port 3000/ and when you push to cloud it will use process.env.PORT
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

/* GET index page */
app.get("/", (req:any, res:Response):void => {
  
  let user = null;

  if (req.oidc.isAuthenticated()) {
    user = req.oidc.user
  
  }
    
    res.render('index', {userinfo : user});
   //res.render('index');
});

app.listen(port, () => {
  console.log(`Server is up on http://localhost:${port}/`);
});