import * as firebase from 'firebase'
        const config = {
            apiKey: "AIzaSyAHI79WVYgDu2q-PTccZr3966-8OsCjqBQ",
        authDomain: "react-blog-1bcff.firebaseapp.com",
        databaseURL: "https://react-blog-1bcff.firebaseio.com",
        projectId: "react-blog-1bcff",
        storageBucket: "react-blog-1bcff.appspot.com",
        messagingSenderId: "194003104730"
      };
      firebase.initializeApp(config);
export const database = firebase.database().ref('/posts');