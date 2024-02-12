import { createUserWithEmailAndPassword } from "firebase/auth";
import { databse, auth } from "./InitializeFirebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";

class service {
  async uploadDocs() {
    try {
      await setDoc(doc(databse, "products", "6666"), {
        title: "Men round T-shirt",
        description: "Iphone 13",
        id: "6666",
        price: 89999,
        subprice: 80000,
        image:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
        keyword: ["t shirt", "mens T-shirt", "new shirt"],
        discount: 35,
      });
      return "success";
    } catch (error) {
      console.log(error);
    }
  }

  async signUp() {
    try {
      await createUserWithEmailAndPassword(
        auth,
        "princenishad1332@gmail.com",
        "123456"
      );
      return "success";
    } catch (error) {
      return error.code;
    }
  }

  // get limit data for home page
  async homeData() {
    try {
      // let databaseRef = "";
      let productRef = collection(databse, "products");
      const q = query(productRef, orderBy("title"), limit(6));
      const querySnapShot = await getDocs(q);
      return querySnapShot;
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }
}

let services = new service();

export default services;
