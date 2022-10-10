import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';


// import oiur credentials (service account)
import serviceAccount from './serviceAccount.js';

//connect to our firebase project using those credentiaals 
initializeApp({
    credential:cert(serviceAccount)
})

//connect to firestore database CRUD
const db = getFirestore();


//define a new video game
const newGame= {
    title: 'Frogger',
    rated: 'E',
    genre: 'Arcade',
    released: 1981,
   // console: ['PS5','Xbox','PC'],
}

//create a doc inside a collection
db.collection('Games').add(newGame)

 // if ok, console.log the doc id 
 .then(doc => console.log('Game created: ',doc.id))

// if not console log the error
.catch(console.error)

//get all games
db.collection('games').get()
//reshape the collection
.then(collection => {
    collection.docs.forEach(doc => {
        console.log(doc.id, doc.data())
    })
})
.catch(console.error)