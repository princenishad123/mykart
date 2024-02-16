import { createUserWithEmailAndPassword } from "firebase/auth";
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
} from "firebase/firestore";

class service {
  async uploadDocs() {
    try {
      await setDoc(doc(database, "products", "9999"), {
        title: "boAt BassHeads",
        description:
          "Sennheiser ACCENTUM Plus Wireless Bluetooth Headphones Audio with Quick-Charge Feature, 50-Hour Battery Playtime, Adaptive Hybrid ANC, Sound Personalization and 2 Yr Warranty-",
        id: "9999",
        price: 349,
        subprice: 549,
        image: "https://m.media-amazon.com/images/I/719elVA3FvL._AC_UY218_.jpg",
        keyword: ["t shirt", "mens T-shirt", "new shirt"],
        discount: 32,
      });
      return "success";
    } catch (error) {
      console.log(error);
    }
  }

  async signUp() {
    try {
      let users = await createUserWithEmailAndPassword(
        auth,
        "princenishad32@gmail.com",
        "123456"
      );
      return users;
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
