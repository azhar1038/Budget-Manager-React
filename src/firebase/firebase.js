import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {firebase, database as default}

// firebase.database().ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 123450,
//     createdAt: 34739463
// })

// firebase.database().ref('expenses').push({
//     description: 'Laptop',
//     note: '',
//     amount: 3500000,
//     createdAt: 34576463
// })

// firebase.database().ref('expenses').push({
//     description: 'Mobile',
//     note: '',
//     amount: 1000000,
//     createdAt: 74938934
// })