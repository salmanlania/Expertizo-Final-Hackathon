import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc , getDocs} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getStorage , ref , uploadBytes , getDownloadURL} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCBOiXYTfnhD8vQh0iZc48vkdp4PW6uJTk",
    authDomain: "expertizofinalhackathon.firebaseapp.com",
    projectId: "expertizofinalhackathon",
    storageBucket: "expertizofinalhackathon.appspot.com",
    messagingSenderId: "967904850904",
    appId: "1:967904850904:web:15f051371fc0e906b3f8ad"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const authentication = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)


const register = async (email, password , firstName , lastName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password , firstName , lastName)
        const docRef = await addDoc(collection(db, "users" ), {
            email: email,
            firstName : firstName, 
            lastName : lastName
        });
        console.log(userCredential , docRef);
        alert("sucess")
    }
    catch (e) {
        alert(e.message)
    }
}

const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

function isLogout() {
    return signOut(auth)
}

async function postAd(caption, imgUpload) {
    try {
      const url = await uploadImage(imgUpload);
      await addDoc(collection(db, "ads"), {
        caption,
        imageUrl: url,
      });
      alert("Ad Posted Succesfully");
    } catch (e) {
      alert(e.message);
    }
  }
  
  async function uploadImage(imgUpload) {
    try {
      const storageRef = ref(storage, "ads/" + imgUpload.name);
      await uploadBytes(storageRef, imgUpload);
      const url = await getDownloadURL(storageRef);
  
      return url;
    } catch (e) {
      alert(e.message);
    }
  }
  
  async function getAds() {
    const querySnapshot = await getDocs(collection(db, "ads"));
    const ads = [];
    querySnapshot.forEach((doc) => {
      ads.push(doc.data());
    });
    return ads;
  }

export{
    register,
    signin,
    authentication,
    auth,
    isLogout,
    postAd,
    getAds
}