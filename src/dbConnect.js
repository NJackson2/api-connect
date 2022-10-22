import { initializeApp, cert, getApps } from "firebase-admin/app";
// importing from npm - default

import { getFirestore } from "firebase-admin/firestore";
// importing from npm - default

import serviceAccount from "../secrets.js"; // in the folder above - this is the file path. You get the private key from firstore

export default function dbConnect () {
    if(!getApps().length) {
        initializeApp ({
            credential: cert(serviceAccount)
        })
    }
    return getFirestore()
} // calling the function to connect the database to our application


