import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  // your Firebase config here
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.getToken().then((token) => {
  console.log(token);
}).catch((error) => {
  console.log(error);
});

messaging.onMessage((payload) => {
  console.log('Message received:', payload);
});
