import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { database, auth } from "./InitializeFirebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";

class service {
  async uploadDocs({
    title,
    category,
    image,
    price,
    discount,
    keyword,
    description,
  }) {
    let id = uuidv4();
    try {
      await setDoc(doc(database, "products", id), {
        id: id,
        title: title,
        category: category,
        image: image,
        price: price,
        discount: discount,
        keyword: keyword,
        description: description,
      });
      return "success";
    } catch (error) {
      return error.code;
    }
  }

  // sign up  user
  async signUp({ name, email, password }) {
    try {
      let users = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(database, "users", users.user.uid), {
        username: name,
        email: email,
        userId: users.user.uid,
        name: "",
        phone: "",
        alternatePhone: "",
        state: "",
        city: "",
        postOffice: "",
        office_house_no: "",
        village_landmark: "",
      });
      return users;
    } catch (error) {
      return error.code;
    }
  }
  //Login user
  login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // get signed-in user
  async getLoggedInUser() {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          return user;
        } else {
          localStorage.clear();
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  // logOut
  async logOut() {
    let data = await signOut(auth);
    return data;
  }

  // get user data by id
  async getUserData(id) {
    try {
      const userid = doc(database, "users", id);
      const docSnap = await getDoc(userid);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return "No such as document";
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  //get all users and products
  async getDataForDb(col) {
    try {
      const data = await getDocs(collection(database, col));

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // set sipping address
  async updateUserAddress(
    id,
    {
      name,
      phone,
      alternatePhone,
      state,
      city,
      postOffice,
      office_house_no,
      village_landmark,
    }
  ) {
    try {
      await updateDoc(doc(database, "users", id), {
        name: name,
        phone: phone,
        alternatePhone: alternatePhone,
        state: state,
        city: city,
        postOffice: postOffice,
        office_house_no: office_house_no,
        village_landmark: village_landmark,
      });
      return "success";
    } catch (error) {
      return error.code;
    }
  }

  // get limit data for home page
  async homeData() {
    try {
      // let databaseRef = "";
      let productRef = collection(database, "products");
      const q = query(productRef, orderBy("title"), limit(11));
      const querySnapShot = await getDocs(q);
      return querySnapShot;
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }
  // get categories data from farebase
  async cotegoryData(category) {
    try {
      const categories = collection(database, "products");
      const q = query(categories, where("category", "==", category));
      let catData = await getDocs(q);
      return catData;
    } catch (error) {
      console.log(`something error in service.js${error.message}`);
    }
  }

  // get data by id
  async getDataById(id) {
    try {
      const productId = doc(database, "products", id);
      const docSnap = await getDoc(productId);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return "No such as document";
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

let services = new service();

export default services;
